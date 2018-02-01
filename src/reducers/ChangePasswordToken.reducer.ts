import { Actions } from '../actions/index'

const defaultState = {
  error: {
    status: false,
    message: ''
  },
  loading: false
}

export const changePasswordToken = (state: any, action: any) => {
  switch (action.type) {
    case Actions.ChangePasswordToken.CHANGE_PASSWORD_TOKEN:
      return {
        ...state,
        error: {
          status: false,
          message: ''
        },
        loading: true
      }
    case Actions.ChangePasswordToken.CHANGE_PASSWORD_TOKEN_SUCCESS:
      return {
        ...state,
        error: {
          status: false,
          message: ''
        },
        loading: false
      }
    case Actions.ChangePasswordToken.CHANGE_PASSWORD_TOKEN_ERROR:
      return {
        ...state,
        error: {
          status: true,
          message: action.payload
        },
        loading: false
      }
    case Actions.ChangePasswordToken.CHANGE_PASSWORD_TOKEN_CLEAR_ERROR:
      return {
        ...state,
        error: {
          status: false,
          message: ''
        },
        loading: false
      }
  }
  return state || defaultState
}
