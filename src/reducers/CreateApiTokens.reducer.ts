import { Actions } from 'actions/index'

const defaultState = {
  error: {
    status: false,
    message: '',
  },
  loading: false,
}

export const createApiTokens = (state: any, action: any) => {
  switch (action.type) {
    case Actions.ApiTokens.CREATE_API_TOKEN:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: true,
      }
    case Actions.ApiTokens.CREATE_API_TOKEN_SUCCESS:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: false,
      }
    case Actions.ApiTokens.CREATE_API_TOKEN_ERROR:
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
