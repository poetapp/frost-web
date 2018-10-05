import * as React from 'react'
import { Route } from 'react-router'

import { Actions } from 'actions'
import { PageLoader, ReducerDescription } from 'components/PageLoader'

import { TokenLayout } from './Token.layout'

export class Token extends PageLoader<object, object> {
  readonly component = TokenLayout

  initialState(): object {
    return {}
  }

  routeHook(key: string, store: any): ReadonlyArray<JSX.Element> {
    const state = store.getState()
    const { token } = state.user
    if (token) store.dispatch(Actions.ApiTokens.onGetApiTokens({ token }))
    return [<Route path="/token" key={key} component={this.container()} />]
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
