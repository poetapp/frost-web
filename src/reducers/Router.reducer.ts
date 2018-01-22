import { Actions } from '../actions/index'

const defaultState = {
  currentPath: '/'
}

export const router = (state: any, action: any) => {
  switch (action.type) {
    case Actions.Router.ROUTER_ON_ENTER:
      return {
        ...state,
        currentPath: action.payload
      }
    case Actions.Router.ROUTER_ON_CHANGE:
      return {
        ...state,
        currentPath: action.payload
      }
  }
  return state || defaultState
}
