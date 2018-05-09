import { Actions } from 'actions/index'

const defaultState = {
  error: {
    status: false,
    message: '',
  },
  loading: false,
}

export const deleteApiToken = (state: any, action: any) => {
  switch (action.type) {
    case Actions.DeleteApiToken.DELETE_API_TOKEN:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: true,
      }
    case Actions.DeleteApiToken.DELETE_API_TOKEN_SUCCESS:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: false,
      }
    case Actions.DeleteApiToken.DELETE_API_TOKEN_ERROR:
      return {
        ...state,
        error: {
          status: true,
          message: action.payload,
        },
        loading: false,
      }
  }
  return state || defaultState
}
