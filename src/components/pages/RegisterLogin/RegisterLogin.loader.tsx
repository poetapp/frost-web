import * as React from 'react'
import { Route } from 'react-router'

import { PageLoader, ReducerDescription } from '../../PageLoader'
import { RegisterLoginLayout } from './RegisterLogin.layout'

export class RegisterLogin extends PageLoader<object, object> {
  component = RegisterLoginLayout

  initialState(): object {
    return {}
  }

  routeHook(key: string) {
    return [<Route path="/login" key={key} component={this.container()} />]
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
