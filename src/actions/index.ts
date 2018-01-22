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
}
