import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from "react-router";

import { createPoetStore } from './store';
import { Layout } from './components/Root';

import './reset.scss'

async function init() {
  const { store, pages } = await createPoetStore();
  const routes = pages.map((page: any, index: any) => page.routeHook('' + index)).reduce((a:any, b:any) => a.concat(b), []);
  
  function requireAuth(store: any) {
    return (route: any, replace: object) => {
      let state = store.getState();
      const { user } = state;
      
      const pathname = route.location.pathname;
      const omitRoutes = ['/', '/login']
      const notNeedOuath = omitRoutes.includes(pathname)
      if (!notNeedOuath && user.token === '') {
        browserHistory.push('/login');
      }
    };
  }
  
  function notFound(route: any, replace: object) {
    browserHistory.push('/');
  }

  ReactDOM.render((
      <Provider store={store}>
          <Router history={browserHistory}>
            <Route component={Layout} onEnter={requireAuth(store)}>
              { routes }
            </Route>
            <Route path="*" onEnter={notFound} />
          </Router>
      </Provider>
    ),
    document.getElementById("app")
  );
}

init();

