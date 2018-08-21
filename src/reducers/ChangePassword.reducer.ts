import { Actions } from 'actions/index'

const { onChangePassword, onChangePasswordError, onChangePasswordSuccess } = Actions.ChangePassword

const defaultState = {
  error: {
    status: false,
    message: '',
  },
  loading: false,
}

export const changePassword = (state: any = defaultState, action: any = {}) => {
  switch (action.type) {
    case onChangePassword().type:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: true,
      }

    case onChangePasswordSuccess().type:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: false,
      }

    case onChangePasswordError().type:
      return {
        ...state,
        error: {
          status: true,
          message: action.payload,
        },
        loading: false,
      }
  }

  return state
}
