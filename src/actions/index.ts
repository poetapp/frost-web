import { NotificationBarState, Network } from 'interfaces/Props'

export namespace Actions {
  export namespace SignUp {
    export const SIGN_UP = 'SIGN_UP'
    export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
    export const SIGN_UP_ERROR = 'SIGN_UP_ERROR'
    export const SIGN_UP_CLEAR_ERROR = 'SIGN_UP_CLEAR_ERROR'
    export const onSignUp = (payload?: object) => ({
      type: SIGN_UP,
      payload,
    })
    export const onSignUpSuccess = (payload?: object) => ({
      type: SIGN_UP_SUCCESS,
      payload,
    })
    export const onSignUpError = (payload?: object) => ({
      type: SIGN_UP_ERROR,
      payload,
    })
    export const onSignUpClearError = (payload?: object) => ({
      type: SIGN_UP_CLEAR_ERROR,
      payload,
    })
  }

  export namespace SignIn {
    export const SIGN_IN = 'SIGN_IN'
    export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
    export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'
    export const SIGN_IN_CLEAR_ERROR = 'SIGN_IN_CLEAR_ERROR'
    export const onSignIn = (payload?: object) => ({
      type: SIGN_IN,
      payload,
    })
    export const onSignInSuccess = (payload?: object) => ({
      type: SIGN_IN_SUCCESS,
      payload,
    })
    export const onSignInError = (payload?: object) => ({
      type: SIGN_IN_ERROR,
      payload,
    })
    export const onSignInClearError = (payload?: object) => ({
      type: SIGN_IN_CLEAR_ERROR,
      payload,
    })
  }

  export namespace SignOut {
    export const SIGN_OUT = 'SIGN_OUT'
    export const onSignOut = (payload?: object) => ({
      type: SIGN_OUT,
      payload,
    })
  }

  export namespace WorkClaimForm {
    export const SUBMIT = 'SUBMIT_WORK_CLAIM_FORM'
    export const SUBMIT_SUCCESS = 'SUBMIT_WORK_CLAIM_FORM_SUCCESS'
    export const SUBMIT_ERROR = 'SUBMIT_WORK_CLAIM_FORM_ERROR'
    export const SUBMIT_CLEAR_ERROR = 'SUBMIT WORK_CLAIM_FORM_CLEAR_ERROR'
    export const onSubmit = (payload?: object) => ({
      type: SUBMIT,
      payload,
    })
    export const onSubmitSuccess = (payload?: object) => ({
      type: SUBMIT_SUCCESS,
      payload,
    })
    export const onSubmitError = (payload?: string) => ({
      type: SUBMIT_ERROR,
      payload,
    })
    export const onSubmitClearError = (payload?: object) => ({
      type: SUBMIT_CLEAR_ERROR,
      payload,
    })
  }

  export namespace Router {
    export const ROUTER_ON_ENTER = 'ROUTER_ON_ENTER'
    export const ROUTER_ON_CHANGE = 'ROUTER_ON_CHANGE'
    export const onEnter = (payload?: object) => ({
      type: ROUTER_ON_ENTER,
      payload,
    })
    export const onChange = (payload?: object) => ({
      type: ROUTER_ON_CHANGE,
      payload,
    })
  }

  export namespace ApiTokens {
    export const GET_API_TOKENS = 'GET_API_TOKENS'
    export const GET_API_TOKENS_SUCCESS = 'GET_API_TOKENS_SUCCESS'
    export const GET_API_TOKENS_ERROR = 'GET_API_TOKENS_ERROR'
    export const CREATE_API_TOKEN = 'CREATE_API_TOKEN'
    export const CREATE_API_TOKEN_SUCCESS = 'CREATE_API_TOKEN_SUCCESS'
    export const CREATE_API_TOKEN_ERROR = 'CREATE_API_TOKEN_ERROR'
    export const DELETE_API_TOKEN = 'DELETE_API_TOKEN'
    export const DELETE_API_TOKEN_SUCCESS = 'DELETE_API_TOKEN_SUCCESS'
    export const DELETE_API_TOKEN_ERROR = 'DELETE_API_TOKEN_ERROR'
    export const DELETE_API_TOKEN_CLEAR_ERROR = 'DELETE_API_TOKEN_CLEAR_ERROR'
    export const onGetApiTokens = (payload?: object) => ({
      type: GET_API_TOKENS,
      payload,
    })
    export const onGetApiTokensSuccess = (payload?: object) => ({
      type: GET_API_TOKENS_SUCCESS,
      payload,
    })
    export const onGetApiTokensError = (payload?: object) => ({
      type: GET_API_TOKENS_ERROR,
      payload,
    })
    export const onCreateApiToken = (payload?: object) => ({
      type: CREATE_API_TOKEN,
      payload,
    })
    export const onCreateApiTokenSuccess = (payload?: object) => ({
      type: CREATE_API_TOKEN_SUCCESS,
      payload,
    })
    export const onCreateApiTokenError = (payload?: object) => ({
      type: CREATE_API_TOKEN_ERROR,
      payload,
    })
    export const onDeleteApiToken = (payload?: object) => ({
      type: DELETE_API_TOKEN,
      payload,
    })
    export const onDeleteApiTokenSuccess = (payload?: object) => ({
      type: DELETE_API_TOKEN_SUCCESS,
      payload,
    })
    export const onDeleteApiTokenError = (payload?: object) => ({
      type: DELETE_API_TOKEN_ERROR,
      payload,
    })
    export const onDeleteApiTokenClearError = (payload?: object) => ({
      type: DELETE_API_TOKEN_CLEAR_ERROR,
      payload,
    })
  }

  export namespace ForgotPassword {
    export const FORGOT_PASSWORD = 'FORGOT_PASSWORD'
    export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'
    export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR'
    export const onForgotPassword = (payload?: object) => ({
      type: FORGOT_PASSWORD,
      payload,
    })
    export const onForgotPasswordSuccess = (payload?: object) => ({
      type: FORGOT_PASSWORD_SUCCESS,
      payload,
    })
    export const onForgotPasswordError = (payload?: object) => ({
      type: FORGOT_PASSWORD_ERROR,
      payload,
    })
  }

  export namespace ChangePassword {
    export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
    export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'
    export const CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR'
    export const onChangePassword = (payload?: object) => ({
      type: CHANGE_PASSWORD,
      payload,
    })
    export const onChangePasswordSuccess = (payload?: object) => ({
      type: CHANGE_PASSWORD_SUCCESS,
      payload,
    })
    export const onChangePasswordError = (payload?: object) => ({
      type: CHANGE_PASSWORD_ERROR,
      payload,
    })
  }

  export namespace ChangePasswordToken {
    export const CHANGE_PASSWORD_TOKEN = 'CHANGE_PASSWORD_TOKEN'
    export const CHANGE_PASSWORD_TOKEN_SUCCESS = 'CHANGE_PASSWORD_TOKEN_SUCCESS'
    export const CHANGE_PASSWORD_TOKEN_ERROR = 'CHANGE_PASSWORD_TOKEN_ERROR'
    export const CHANGE_PASSWORD_TOKEN_CLEAR_ERROR = 'CHANGE_PASSWORD_TOKEN_CLEAR_ERROR'
    export const onChangePassword = (payload?: object) => ({
      type: CHANGE_PASSWORD_TOKEN,
      payload,
    })
    export const onChangePasswordTokenSuccess = (payload?: object) => ({
      type: CHANGE_PASSWORD_TOKEN_SUCCESS,
      payload,
    })
    export const onChangePasswordTokenError = (payload?: object) => ({
      type: CHANGE_PASSWORD_TOKEN_ERROR,
      payload,
    })
    export const onChangePasswordTokenClearError = (payload?: object) => ({
      type: CHANGE_PASSWORD_TOKEN_CLEAR_ERROR,
      payload,
    })
  }

  export namespace VerifiedAccount {
    export const VERIFIED_ACCOUNT = 'VERIFIED_ACCOUNT'
    export const VERIFIED_ACCOUNT_SUCCESS = 'VERIFIED_ACCOUNT_SUCCESS'
    export const VERIFIED_ACCOUNT_ERROR = 'VERIFIED_ACCOUNT_ERROR'
    export const VERIFIED_ACCOUNT_CLEAR_ERROR = 'VERIFIED_ACCOUNT_CLEAR_ERROR'
    export const onVerifiedAccount = (payload?: object) => ({
      type: VERIFIED_ACCOUNT,
      payload,
    })
    export const onVerifiedAccountSuccess = (payload?: object) => ({
      type: VERIFIED_ACCOUNT_SUCCESS,
      payload,
    })
    export const onVerifiedAccountError = (payload?: object) => ({
      type: VERIFIED_ACCOUNT_ERROR,
      payload,
    })
    export const onVerifiedAccountClearError = (payload?: object) => ({
      type: VERIFIED_ACCOUNT_CLEAR_ERROR,
      payload,
    })
  }

  export namespace SendEmailVerifiedAccount {
    export const SEND_EMAIL_VERIFIED_ACCOUNT = 'SEND_EMAIL_VERIFIED_ACCOUNT'
    export const SEND_EMAIL_VERIFIED_ACCOUNT_SUCCESS = 'SEND_EMAIL_VERIFIED_ACCOUNT_SUCCESS'
    export const SEND_EMAIL_VERIFIED_ACCOUNT_ERROR = 'SEND_EMAIL_VERIFIED_ACCOUNT_ERROR'
    export const SEND_EMAIL_VERIFIED_ACCOUNT_CLEAR_ERROR = 'SEND_EMAIL_VERIFIED_ACCOUNT_CLEAR_ERROR'
    export const SEND_EMAIL_VERIFIED_ACCOUNT_RESET_RETRY = 'SEND_EMAIL_VERIFIED_ACCOUNT_RESET_RETRY'
    export const onSendEmailVerifiedAccount = (payload?: object) => ({
      type: SEND_EMAIL_VERIFIED_ACCOUNT,
      payload,
    })
    export const onSendEmailVerifiedAccountSuccess = (payload?: object) => ({
      type: SEND_EMAIL_VERIFIED_ACCOUNT_SUCCESS,
      payload,
    })
    export const onSendEmailVerifiedAccountError = (payload?: object) => ({
      type: SEND_EMAIL_VERIFIED_ACCOUNT_ERROR,
      payload,
    })
    export const onSendEmailVerifiedAccountClearError = (payload?: object) => ({
      type: SEND_EMAIL_VERIFIED_ACCOUNT_CLEAR_ERROR,
      payload,
    })
    export const onSendEmailVerifiedAccountResetRetry = (payload?: object) => ({
      type: SEND_EMAIL_VERIFIED_ACCOUNT_RESET_RETRY,
      payload,
    })
  }

  export namespace LoadingPage {
    export const LOADING_ON = 'LOADING_ON'
    export const LOADING_OFF = 'LOADING_OFF'
    export const LOADING_FULL = 'LOADING_FULL'
    export const onLoadingOn = (payload?: object) => ({
      type: LOADING_ON,
      payload,
    })
    export const onLoadingOff = (payload?: object) => ({
      type: LOADING_OFF,
      payload,
    })
    export const onLoadingFull = (payload?: object) => ({
      type: LOADING_FULL,
      payload,
    })
  }

  export namespace Profile {
    export const PROFILE = 'PROFILE'
    export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'
    export const PROFILE_ERROR = 'PROFILE_ERROR'
    export const PROFILE_CLEAR_ERROR = 'PROFILE_CLEAR_ERROR'
    export const onProfile = (payload?: object) => ({
      type: PROFILE,
      payload,
    })
    export const onProfileSuccess = (payload?: object) => ({
      type: PROFILE_SUCCESS,
      payload,
    })
    export const onProfileError = (payload?: object) => ({
      type: PROFILE_ERROR,
      payload,
    })
    export const onProfileClearError = (payload?: object) => ({
      type: PROFILE_CLEAR_ERROR,
      payload,
    })
  }

  export namespace SetTokenLogin {
    export const SET_TOKEN_LOGIN = 'SET_TOKEN_LOGIN'

    export const onSetTokenLogin = (payload?: object) => ({
      type: SET_TOKEN_LOGIN,
      payload,
    })
  }

  export namespace Modal {
    export const SHOW_MODAL = 'SHOW_MODAL'
    export const HIDE_MODAL = 'HIDE_MODAL'

    export const onShowModal = (payload: { readonly modal: string; readonly data: object }) => ({
      type: SHOW_MODAL,
      payload,
    })

    export const onHideModal = () => ({
      type: HIDE_MODAL,
    })
  }
  export namespace NotificationBar {
    export const SHOW_NOTIFICATION_BAR = 'SHOW_NOTIFICATION_BAR'
    export const HIDE_NOTIFICATION_BAR = 'HIDE_NOTIFICATION_BAR'
    export const RESET_NOTIFICATION_BAR = 'RESET_NOTIFICATION_BAR'

    export const onShowNotificationBar = (payload: NotificationBarState) => ({
      type: SHOW_NOTIFICATION_BAR,
      payload,
    })

    export const onHideNotificationBar = () => ({
      type: HIDE_NOTIFICATION_BAR,
    })

    export const onResetNotificationBar = () => ({
      type: RESET_NOTIFICATION_BAR,
    })
  }

  export namespace ToogleNetworkBitcoin {
    export const CHANGE_NETWORK = 'CHANGE_NETWORK'

    export const onChangeNetwork = (payload?: Network) => ({
      type: CHANGE_NETWORK,
      payload,
    })
  }
}
