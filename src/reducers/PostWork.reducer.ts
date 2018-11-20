import { Actions } from 'actions/index'

export const defaultState = {
  error: {
    status: false,
    message: '',
  },
  loading: false,
}

export const postWork = (state: any = defaultState, action: any = {}) => {
  switch (action.type) {
    case Actions.PostWork.POST_WORK:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: true,
      }
    case Actions.PostWork.POST_WORK_SUCCESS:
      return {
        ...state,
        error: {
          status: false,
          message: '',
        },
        loading: false,
      }
    case Actions.PostWork.POST_WORK_ERROR:
      return {
        ...state,
        error: {
          status: true,
          message: action.payload,
        },
        loading: false,
      }
    case Actions.PostWork.POST_WORK_CLEAR_ERROR:
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
