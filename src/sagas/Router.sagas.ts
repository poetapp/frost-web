import { Actions } from 'actions/index'
import { SagaIterator } from 'redux-saga'
import { takeLatest, put, ForkEffect } from 'redux-saga/effects'

export function RouterSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.Router.ROUTER_ON_CHANGE, Router)
  }
}

function* Router(action: any): SagaIterator {
  yield put(Actions.NotificationBar.onResetNotificationBar())
}
