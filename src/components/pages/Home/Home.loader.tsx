import * as React from 'react'
import { Route } from 'react-router'

import { PageLoader, ReducerDescription } from '../../PageLoader'
import { HomeLayout } from './Home.layout'

export class Home extends PageLoader<object, object> {
  component = HomeLayout

  initialState(): object {
    return {}
  }

  routeHook(key: string) {
    return [<Route path="/" key={key} component={this.container()} />]
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
