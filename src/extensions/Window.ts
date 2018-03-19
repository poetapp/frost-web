import { StoreCreator } from 'redux'

declare global {
  interface Window {
    readonly __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: () => StoreCreator
  }
}
