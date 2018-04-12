import { Actions } from 'actions/index'

const defaultState = {
  action: 'hide',
  type: '',
  message: ''
}

export const notificationBar = (state: any, action: any) => {
  switch (action.type) {
    case Actions.NotificationBar.SHOW_NOTIFICATION_BAR:
      return {
        ...state,
        action: 'fade-in',
        type: action.payload.type,
        message: action.payload.message
      }
    case Actions.NotificationBar.HIDE_NOTIFICATION_BAR:
      return {
        ...state,
        action: 'fade-out'
      }

    case Actions.NotificationBar.RESET_NOTIFICATION_BAR:
      return {
        ...defaultState
      }
    default:
      return state || defaultState
  }
}
