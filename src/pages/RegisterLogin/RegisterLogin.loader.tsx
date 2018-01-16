import * as React from 'react';
import { Route } from 'react-router';
import { Action } from 'redux';

import PageLoader, { ReducerDescription } from '../../components/PageLoader';
import { RegisterLoginLayout } from './RegisterLogin.layout';

export class RegisterLogin extends PageLoader<Object, Object> {

  component = RegisterLoginLayout;

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