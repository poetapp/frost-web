import { Actions } from 'actions/index'

const defaultState = {
  token: '',
  profile: {
    email: '',
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
    case Actions.SignOut.SIGN_OUT:
      return {
        ...defaultState,
        ...{ profile: { ...defaultState.profile } },
      }
  }
  return state || defaultState
}
