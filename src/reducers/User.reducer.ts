import { Actions } from 'actions/index'
const { REHYDRATE } = require('redux-persist/constants')

const defaultState = {
  token: '',
  profile: {
    email: '',
    apiTokens: new Array(),
    verified: false,
    createdAt: '',
  },
}

export const user = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SignIn.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        ...{ profile: { ...defaultState.profile, ...action.payload.profile } },
      }
    case Actions.SignUp.SIGN_UP_SUCCESS:
      return {
        ...state,
        ...action.payload,
        ...{ profile: { ...defaultState.profile, ...action.payload.profile } },
      }
    case Actions.ApiTokens.GET_API_TOKENS_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          apiTokens: action.payload,
        },
      }
    case Actions.ApiTokens.CREATE_API_TOKEN_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          apiTokens: [...state.profile.apiTokens, ...[action.payload]],
        },
      }
    case Actions.VerifiedAccount.VERIFIED_ACCOUNT_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          verified: true,
        },
      }
    case Actions.Profile.PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload,
        },
      }
    case Actions.SetTokenLogin.SET_TOKEN_LOGIN:
      return {
        ...state,
        user: {
          ...state.user,
          token: action.payload.token,
        },
      }
    case Actions.DeleteApiToken.DELETE_API_TOKEN_SUCCESS:
      const apitTokensFilter = state.profile.apiTokens.filter((token: string) => token !== action.payload)
      return {
        ...state,
        profile: {
          ...state.profile,
          apiTokens: apitTokensFilter,
        },
      }
    case Actions.SignOut.SIGN_OUT:
      return {
        ...defaultState,
        ...{ profile: { ...defaultState.profile } },
      }
    case REHYDRATE:
      return {
        ...state,
        ...action.payload.user,
      }
  }
  return state || defaultState
}
