import { Actions } from '../actions/index'

const defaultState = {
  error: {
    status: false,
    message: ''
  },
  loading: false
}

export const verifiedAccount = (state: any, action: any) => {
  switch (action.type) {
    case Actions.VerifiedAccount.VERIFIED_ACCOUNT:
      return {
        ...state,
        error: {
          status: false,
          message: ''
        },
        loading: true
      }
    case Actions.VerifiedAccount.VERIFIED_ACCOUNT_SUCCESS:
      return {
        ...state,
        error: {
          status: false,
          message: ''
        },
        loading: false
      }
    case Actions.VerifiedAccount.VERIFIED_ACCOUNT_ERROR:
      return {
        ...state,
        error: {
          status: true,
          message: action.payload
        },
        loading: false
      }
  }
  return state || defaultState
}
