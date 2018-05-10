import { Actions } from 'actions/index'

const defaultState = {
  show: false,
  modal: '',
  data: {},
}

export const modal = (state: any, action: any) => {
  switch (action.type) {
    case Actions.Modal.SHOW_MODAL:
      return {
        ...state,
        show: true,
        modal: action.payload.modal,
        data: action.payload.data,
      }
    case Actions.Modal.HIDE_MODAL:
      return {
        ...defaultState,
      }
  }
  return state || defaultState
}
