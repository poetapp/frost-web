import * as React from 'react'
import { Route } from 'react-router'

import { PageLoader, ReducerDescription } from '../../PageLoader'
import { TokenLayout } from './Token.layout'

export class Token extends PageLoader<object, object> {
  component = TokenLayout

  initialState(): object {
    return {}
  }

  routeHook(key: string) {
    return [<Route path="/token" key={key} component={this.container()} />]
  }

  reducerHook<State>(state: State): ReducerDescription<null> {
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
