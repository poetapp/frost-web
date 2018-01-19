import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
const { persistStore, autoRehydrate } = require('redux-persist');
import './extensions/Array';

import PageLoader from './components/PageLoader';

import pageCreators from "./components/pages";
import sagaList from './sagas'
import reducers from './reducers';
import { Actions } from './actions/index'

function bindSagas(pages: PageLoader<any, any>[]) {
  const sagas = pages
    .map(page => page.sagaHook)
    .concat(sagaList)
    .map(saga => saga())
    .filterTruthy();

  return function*() {
    for (let saga of sagas) {
      yield fork(saga);
    }
  }
}

function bindReducers(pages: PageLoader<any, any>[]): any {
  const pageReducers = pages
    .map(page => page.reducerHook())
    .filterTruthy()
    .toObject(reducerDescription => ({key: reducerDescription.subState, value: reducerDescription.reducer}));

  return { ...pageReducers, ...reducers };
}

function bindInitialState(pages: PageLoader<any, any>[]): any {
  const initialState = pages
    .map(page => ({reducerDescription: page.reducerHook(), initialState: page.initialState()}))
    .filter(({reducerDescription, initialState}) => reducerDescription)
    .toObject(({reducerDescription, initialState}) => ({key: reducerDescription.subState, value: initialState}));

  return initialState;
}

export function createPoetStore(): Promise<{ store: any, pages: any }> {
  return new Promise((resolve, reject) => {
    try {
      const pages = pageCreators.map(Page => new Page());

      const initialState = bindInitialState(pages);
      const reducerList = bindReducers(pages);

      const enhancer: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
      const sagaMiddleware = createSagaMiddleware();

      const store = createStore(
        combineReducers(reducerList),
        initialState,
        enhancer(applyMiddleware(sagaMiddleware), autoRehydrate()),
      );

      sagaMiddleware.run(bindSagas(pages));

      persistStore(store, {}, () => resolve({store, pages}));
    } catch(e) {
      reject(e);
    }
  })
}
