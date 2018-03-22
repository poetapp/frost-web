import { connect, StatelessComponent, ComponentClass } from 'react-redux'
import { Reducer } from 'redux'

export interface ReducerDescription<T> {
  readonly subState: string
  readonly reducer: Reducer<T>
}

export abstract class PageLoader<State, Properties> {
  abstract readonly component:
    | ComponentClass<Properties>
    | StatelessComponent<Properties>

  abstract initialState(): State
  abstract routeHook(key: string): ReadonlyArray<JSX.Element>
  abstract reducerHook<State>(): ReducerDescription<State>
  abstract sagaHook(): any
  abstract select(state: any, ownProps: any): Properties
  mapDispatchToProps(): any {
    return {}
  }

  protected container(): ComponentClass<object> {
    return connect(this.select.bind(this), this.mapDispatchToProps())(
      this.component
    )
  }
}
