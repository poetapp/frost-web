import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fork, ForkEffect } from 'redux-saga/effects'
const { persistStore, autoRehydrate } = require('redux-persist')
import { Actions } from 'actions'
import 'extensions/Array'

import { PageLoader } from 'components/PageLoader'

import { pagesLoaders } from 'components/pages'
import { reducers } from 'reducers'
import { sagas as sagaList } from 'sagas'

function bindSagas(
  pages: ReadonlyArray<PageLoader<any, any>>
): () => IterableIterator<ForkEffect> {
  const pageSagas = pages.map(page => page.sagaHook)
  const sagas = [...pageSagas, ...sagaList].map(saga => saga()).filterTruthy()

  return function*(): IterableIterator<ForkEffect> {
    for (const saga of sagas) yield fork(saga)
  }
}

function bindReducers(pages: ReadonlyArray<PageLoader<any, any>>): any {
  const pageReducers = pages
    .map(page => page.reducerHook())
    .filterTruthy()
    .toObject(reducerDescription => ({
      key: reducerDescription.subState,
      value: reducerDescription.reducer
    }))

  return { ...pageReducers, ...reducers }
}

function bindInitialState(pages: ReadonlyArray<PageLoader<any, any>>): any {
  const initialState = pages
    .map(page => ({
      reducerDescription: page.reducerHook(),
      initialState: page.initialState()
    }))
    .filter(({ reducerDescription, initialState }) => reducerDescription)
    .toObject(({ reducerDescription, initialState }) => ({
      key: reducerDescription.subState,
      value: initialState
    }))
  return initialState
}

export function createPoetStore(): Promise<{
  readonly store: any
  readonly pages: any
}> {
  return new Promise((resolve, reject) => {
    try {
      const pages = pagesLoaders.map(Page => new Page())

      const initialState = bindInitialState(pages)
      const reducerList = bindReducers(pages)

      const enhancer: any =
        process.env.NODE_ENV === 'development' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          : compose
      const sagaMiddleware = createSagaMiddleware()

      const appReducer = combineReducers(reducerList)
      const rootReducer = (state: any, action: any) =>
        action.type === Actions.SignOut.SIGN_OUT
          ? appReducer({}, action)
          : appReducer(state, action)

      const store = createStore(
        rootReducer,
        initialState,
        enhancer(applyMiddleware(sagaMiddleware), autoRehydrate())
      )

      sagaMiddleware.run(bindSagas(pages))

      persistStore(store, {}, () => resolve({ store, pages }))
    } catch (e) {
      reject(e)
    }
  })
}
