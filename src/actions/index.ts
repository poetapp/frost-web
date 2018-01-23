export namespace Actions {
  export namespace SignUp {
    export const SIGN_UP = 'SIGN_UP'
    export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
    export const SIGN_UP_ERROR = 'SIGN_UP_ERROR'
    export const onSignUp = (payload?: object) => ({
      type: SIGN_UP,
      payload
    })
    export const onSignUpSuccess = (payload?: object) => ({
      type: SIGN_UP_SUCCESS,
      payload
    })
    export const onSignUpError = (payload?: object) => ({
      type: SIGN_UP_ERROR,
      payload
    })
  }

  export namespace SignIn {
    export const SIGN_IN = 'SIGN_IN'
    export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
    export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'
    export const onSignIn = (payload?: object) => ({
      type: SIGN_IN,
      payload
    })
    export const onSignInSuccess = (payload?: object) => ({
      type: SIGN_IN_SUCCESS,
      payload
    })
    export const onSignInError = (payload?: object) => ({
      type: SIGN_IN_ERROR,
      payload
    })
  }

  export namespace SignOut {
    export const SIGN_OUT = 'SIGN_OUT'
    export const onSignOut = (payload?: object) => ({
      type: SIGN_OUT,
      payload
    })
  }

  export namespace Router {
    export const ROUTER_ON_ENTER = 'ROUTER_ON_ENTER'
    export const ROUTER_ON_CHANGE = 'ROUTER_ON_CHANGE'
    export const onEnter = (payload?: object) => ({
      type: ROUTER_ON_ENTER,
      payload
    })
    export const onChange = (payload?: object) => ({
      type: ROUTER_ON_CHANGE,
      payload
    })
  }

  export namespace ApiTokens {
    export const GET_API_TOKENS = 'GET_API_TOKENS'
    export const GET_API_SUCCESS = 'GET_API_SUCCESS'
    export const GET_API_ERROR = 'GET_API_ERROR'
    export const onGetApiTokens = (payload?: object) => ({
      type: GET_API_TOKENS,
      payload
    })
    export const onGetApiTokensSuccess = (payload?: object) => ({
      type: GET_API_SUCCESS,
      payload
    })
    export const onGetApiTokensError = (payload?: object) => ({
      type: GET_API_ERROR,
      payload
    })
  }

  export namespace ForgotPassword {
    export const FORGOT_PASSWORD = 'FORGOT_PASSWORD'
    export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'
    export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR'
    export const onForgotPassword = (payload?: object) => ({
      type: FORGOT_PASSWORD,
      payload
    })
    export const onForgotPasswordSuccess = (payload?: object) => ({
      type: FORGOT_PASSWORD_SUCCESS,
      payload
    })
    export const onForgotPasswordError = (payload?: object) => ({
      type: FORGOT_PASSWORD_ERROR,
      payload
    })
  }

  export namespace ChangePassword {
    export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
    export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'
    export const CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR'
    export const onChangePassword = (payload?: object) => ({
      type: CHANGE_PASSWORD,
      payload
    })
    export const onChangePasswordSuccess = (payload?: object) => ({
      type: CHANGE_PASSWORD_SUCCESS,
      payload
    })
    export const onChangePasswordError = (payload?: object) => ({
      type: CHANGE_PASSWORD_ERROR,
      payload
    })
  }
}
