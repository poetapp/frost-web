import * as React from 'react'
import { Route } from 'react-router'

import { PageLoader, ReducerDescription } from 'components/PageLoader'
import { ForgotPasswordLayout } from './ForgotPassword.layout'

export class ForgotPassword extends PageLoader<object, object> {
  readonly component = ForgotPasswordLayout

  initialState(): object {
    return {}
  }

  routeHook(key: string): ReadonlyArray<JSX.Element> {
    return [<Route path="/forgot-password" key={key} component={this.container()} />]
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
