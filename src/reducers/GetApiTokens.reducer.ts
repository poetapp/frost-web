import { Actions } from 'actions/index'

const defaultState = {
  error: {
    status: false,
    message: '',
  },
  loading: false,
}

export const getApiTokens = (state: any, action: any) => {
  switch (action.type) {
    case Actions.ApiTokens.GET_API_TOKENS:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: true,
      }
    case Actions.ApiTokens.GET_API_TOKENS_SUCCESS:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: false,
      }
    case Actions.ApiTokens.GET_API_TOKENS_ERROR:
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
