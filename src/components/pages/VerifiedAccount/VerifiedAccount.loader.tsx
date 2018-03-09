import * as React from 'react'
import { Route } from 'react-router'

import { PageLoader, ReducerDescription } from 'components/PageLoader'
import { VerifiedAccountLayout } from 'components/pages/VerifiedAccount/VerifiedAccount.layout'

export class VerifiedAccount extends PageLoader<object, object> {
  component = VerifiedAccountLayout

  initialState(): object {
    return {}
  }

  routeHook(key: string) {
    return [
      <Route path="/verified-account" key={key} component={this.container()} />
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
