import * as React from 'react'
import { Route } from 'react-router'

import { PageLoader, ReducerDescription } from '../../PageLoader'
import { DashboardLayout } from './Dashboard.layout'

export class Dashboard extends PageLoader<object, object> {
  component = DashboardLayout

  initialState(): object {
    return {}
  }

  routeHook(key: string) {
    return [<Route path="/dashboard" key={key} component={this.container()} />]
  }

  reducerHook<State>(): ReducerDescription<State> {
    return null
  }

  sagaHook(): any {
    return null
  }

  select(state: any, ownProps: any): object {
    return {}
  }

  mapDispatchToProps(): any {
    return {}
  }
}
