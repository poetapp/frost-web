import { Actions } from 'actions/index'

export const defaultState = {
  error: {
    status: false,
    message: '',
  },
  loading: false,
}

export const workClaimForm = (state: any = defaultState, action: any = {}) => {
  switch (action.type) {
    case Actions.WorkClaimForm.SUBMIT:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: true,
      }
    case Actions.WorkClaimForm.SUBMIT_SUCCESS:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: false,
      }
    case Actions.WorkClaimForm.SUBMIT_ERROR:
      return {
        ...state,
        error: {
          status: true,
          message: action.payload,
        },
        loading: false,
      }
    case Actions.WorkClaimForm.CLEAR_ERROR:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: false,
      }
    default:
      return state
  }
}
