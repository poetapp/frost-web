import * as React from 'react'
import { Route } from 'react-router'

import { PageLoader, ReducerDescription } from '../../PageLoader'
import { ChangePasswordLayout } from './ChangePassword.layout'

export class ChangePassword extends PageLoader<object, object> {
  component = ChangePasswordLayout

  initialState(): object {
    return {}
  }

  routeHook(key: string) {
    return [
      <Route path="/change-password" key={key} component={this.container()} />
    ]
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
