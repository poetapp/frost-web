import { Actions } from '../actions/index'

const defaultState = {
  error: {
    status: false,
    message: ''
  },
  loading: false,
  retryWait: false
}

export const sendEmailVerifiedAccount = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SendEmailVerifiedAccount.SEND_EMAIL_VERIFIED_ACCOUNT:
      return {
        ...state,
        error: {
          status: false,
          message: ''
        },
        loading: true,
        retryWait: true
      }
    case Actions.SendEmailVerifiedAccount.SEND_EMAIL_VERIFIED_ACCOUNT_SUCCESS:
      return {
        ...state,
        error: {
          status: false,
          message: ''
        },
        loading: false,
        retryWait: true
      }
    case Actions.SendEmailVerifiedAccount.SEND_EMAIL_VERIFIED_ACCOUNT_ERROR:
      return {
        ...state,
        error: {
          status: true,
          message: action.payload
        },
        loading: false,
        retryWait: true
      }
    case Actions.SendEmailVerifiedAccount
      .SEND_EMAIL_VERIFIED_ACCOUNT_RESET_RETRY:
      return {
        ...state,
        error: {
          status: true,
          message: action.payload
        },
        loading: false,
        retryWait: false
      }
  }
  return state || defaultState
}
