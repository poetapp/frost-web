import { Actions } from '../actions/index'
const { REHYDRATE } = require('redux-persist/constants')

const defaultState = {
  token: '',
  profile: {
    email: '',
    apiToken: {},
    verified: false,
    createdAt: ''
  }
}

export const user = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SignIn.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        ...{ profile: { ...defaultState.profile, ...action.payload.profile } }
      }
    case Actions.SignUp.SIGN_UP_SUCCESS:
      return {
        ...state,
        ...action.payload,
        ...{ profile: { ...defaultState.profile, ...action.payload.profile } }
      }
    case Actions.ApiTokens.GET_API_SUCCESS:
      state.profile.apiToken = action.payload
      return {
        ...state
      }
    case Actions.VerifiedAccount.VERIFIED_ACCOUNT_SUCCESS:
      state.profile.verified = true
      return {
        ...state
      }
    case Actions.Profile.PROFILE_SUCCESS:
      state.profile.verified = action.payload.verified
      state.profile.createdAt = action.payload.createdAt
      state.profile.email = action.payload.email
      return {
        ...state
      }
    case Actions.ChangePasswordToken.CHANGE_PASSWORD_TOKEN_SUCCESS:
      state.token = action.payload.token
      return {
        ...state
      }
    case REHYDRATE:
      return {
        ...state,
        ...action.payload.user
      }
  }
  return state || defaultState
}
