import { Actions } from 'actions/index'

const defaultState = {
  error: {
    status: false,
    message: '',
  },
  loading: false,
}

export const forgotPassword = (state: any, action: any) => {
  switch (action.type) {
    case Actions.ForgotPassword.FORGOT_PASSWORD:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: true,
      }
    case Actions.ForgotPassword.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: false,
      }
    case Actions.ForgotPassword.FORGOT_PASSWORD_ERROR:
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
