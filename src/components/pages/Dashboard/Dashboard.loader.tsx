import * as React from 'react';
import { Route } from 'react-router';
import { Action } from 'redux';

import PageLoader, { ReducerDescription } from '../../PageLoader';
import { DashboardLayout } from './Dashboard.layout';

export class Dashboard extends PageLoader<Object, Object> {

  component = DashboardLayout;

  initialState(): Object {
    return {};
  }

  routeHook(key: string) {
    return [<Route path="/dashboard" key={key} component={this.container()}/>]
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