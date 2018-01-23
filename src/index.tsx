import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import { Actions } from './actions'
import { Layout } from './components/Root'
import { createPoetStore } from './store'

import './reset.scss'

async function init() {
  const { store, pages } = await createPoetStore()
  const routes = pages
    .map((page: any, index: any) => page.routeHook('' + index))
    .reduce((a: any, b: any) => a.concat(b), [])

  function requireAuth(store: any) {
    return (route: any, replace: object) => {
      const state = store.getState()
      const { user } = state
      const pathname = route.location.pathname
      store.dispatch(Actions.Router.onEnter(pathname))
      const omitRoutes = ['/', '/login', '/forgot-password', '/change-password', '/verified-account']
      const notNeedOuath = omitRoutes.includes(pathname)
      if (!notNeedOuath && user.token === '') browserHistory.push('/login')
    }
  }

  function onChange(store: any) {
    return (route: any, replace: any) => {
      const pathname = replace.location.pathname
      store.dispatch(Actions.Router.onChange(pathname))
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
