import * as React from 'react';
import { Route } from 'react-router';
import { Action } from 'redux';

import PageLoader, { ReducerDescription } from '../../components/PageLoader';
import { Layout } from './Login.layout';

export class Login extends PageLoader<Object, Object> {

  component = Layout;

  initialState(): Object {
    return {};
  }

  routeHook(key: string) {
    return [<Route path="/login" key={key} component={this.container()}/>]
  }

  reducerHook<State>(): ReducerDescription<null> {
    return null
  }

  sagaHook(): any {
    return null;
  }

  select(state: any, ownProps: any): Object {
    return {};
  }

  mapDispatchToProps(): any {
    return {}
  }
}