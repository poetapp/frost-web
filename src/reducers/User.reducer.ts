import { Actions } from '../actions/index'
const { REHYDRATE } = require('redux-persist/constants')

const defaultState = {
  token: '',
  email: '',
  apiToken: {},
  verified: false
}

export const user = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SignIn.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SignUp.SIGN_UP_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SignOut.SIGN_OUT:
      return {
        ...state,
        token: '',
        email: ''
      }
    case Actions.ApiTokens.GET_API_SUCCESS:
      return {
        ...state,
        apiToken: action.payload
      }
    case Actions.VerifiedAccount.VERIFIED_ACCOUNT_SUCCESS:
      return {
        ...state,
        verified: true
      }
    case REHYDRATE:
      return {
        ...state,
        ...action.payload.user
      }
  }
  return state || defaultState
}
