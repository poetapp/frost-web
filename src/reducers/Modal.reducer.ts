import { Actions } from 'actions/index'

const defaultState = {
  show: false,
  modal: ''
}

export const modal = (state: any, action: any) => {
  switch (action.type) {
    case Actions.Modal.SHOW_MODAL:
      return {
        ...state,
        show: true,
        modal: action.payload.modal
      }
    case Actions.Modal.HIDE_MODAL:
      return {
        ...state,
        show: false,
        modal: ''
      }
  }
  return state || defaultState
}
