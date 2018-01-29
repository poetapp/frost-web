import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import { Actions } from './actions'
import { Layout } from './components/Root'
import { createPoetStore } from './store'

import 'react-progress-bar-plus/lib/progress-bar.css'
import './reset.scss'

async function init() {
  const { store, pages } = await createPoetStore()
  const routes = pages
    .map((page: any, index: any) => page.routeHook('' + index))
    .reduce((a: any, b: any) => a.concat(b), [])

  function handlerRoutes(store: any, pathname: string) {
    const state = store.getState()
    const { user } = state
    const omitRoutes = [
      '/',
      '/login',
      '/forgot-password',
      '/change-password',
      '/verified-account'
    ]
    const notNeedOuath = omitRoutes.includes(pathname)
    if (['/login', '/login/'].includes(pathname) && user.token !== '')
      browserHistory.push('/dashboard')

    if (!notNeedOuath && user.token === '') browserHistory.push('/login')
  }

  function requireAuth(store: any) {
    return (route: any, replace: object) => {
      const pathname = route.location.pathname
      store.dispatch(Actions.Router.onEnter(pathname))
      handlerRoutes(store, pathname)
    }
  }

  function onChange(store: any) {
    return (route: any, replace: any) => {
      const pathname = replace.location.pathname
      store.dispatch(Actions.Router.onChange(pathname))
      handlerRoutes(store, pathname)
    }
  }

  function notFound(route: any, replace: object) {
    browserHistory.push('/')
  }

  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route
          component={Layout}
          onEnter={requireAuth(store)}
          onChange={onChange(store)}
        >
          {routes}
        </Route>
        <Route path="*" onEnter={notFound} />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}

init()
