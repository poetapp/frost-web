import { Actions } from 'actions/index'

export const defaultState = {
  error: {
    status: false,
    message: '',
  },
  loading: false,
}

export const createClaim = (state: any = defaultState, action: any = {}) => {
  switch (action.type) {
    case Actions.CreateClaim.CREATE_CLAIM:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: true,
      }
    case Actions.CreateClaim.CREATE_CLAIM_SUCCESS:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: false,
      }
    case Actions.CreateClaim.CREATE_CLAIM_ERROR:
      return {
        ...state,
        error: {
          status: true,
          message: action.payload,
        },
        loading: false,
      }
    case Actions.CreateClaim.CREATE_CLAIM_CLEAR_ERROR:
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
