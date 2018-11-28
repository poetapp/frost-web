import { Frost } from '@po.et/frost-client'
import { delay, SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'
const { toast } = require('react-toastify')

import { Actions } from 'actions'
import { Configuration } from 'configuration'

const FrostClient = new Frost({ host: Configuration.frostApiUrl })

export function PostWorkSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.PostWork.POST_WORK, PostWork)
  }
}

export function* PostWork(action: any): SagaIterator {
  try {
    const { token, work } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    const { workId } = yield call([FrostClient, FrostClient.createWork], token, work)
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.NotificationBar.onShowNotificationBar({
      type: 'link-success',
      message: `${Configuration.mainExplorerUrl}/works/${workId}`,
    }))
    yield call(delay, 8000)
    yield put(Actions.NotificationBar.onHideNotificationBar())
    yield call(delay, 2000)
    yield put(Actions.PostWork.onPostWorkSuccess())
    yield put(Actions.NotificationBar.onResetNotificationBar())
    yield call(delay, 300)
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.PostWork.onPostWorkError(e))
    toast.error(e.message, {
      className: 'toast',
      autoClose: 2500,
    })
    yield call(delay, 300)
    yield put(Actions.PostWork.onPostWorkClearError())
  }
}
