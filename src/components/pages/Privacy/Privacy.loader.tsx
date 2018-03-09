import * as React from 'react'
import { Route } from 'react-router'

import { PageLoader, ReducerDescription } from 'components/PageLoader'
import { PrivacyLayout } from 'components/pages/Privacy/Privacy.layout'

export class Privacy extends PageLoader<object, object> {
  component = PrivacyLayout

  initialState(): object {
    return {}
  }

  routeHook(key: string) {
    return [<Route path="/privacy" key={key} component={this.container()} />]
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
