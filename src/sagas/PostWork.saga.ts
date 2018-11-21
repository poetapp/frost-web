import { Frost } from '@po.et/frost-client'
import { Actions } from 'actions'
import { delay, SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'
const { toast } = require('react-toastify')

import { Configuration } from 'configuration'
import { WorkAttributes } from 'interfaces/Props'

async function postWorkFrost(data: {
  readonly token: string
  readonly work: WorkAttributes,
}): Promise<{ readonly workId: string }> {
  const { token, work } = data
  const frost = new Frost({ host: Configuration.frostApiUrl })
  return await frost.createWork(token, work)
}

export function PostWorkSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.PostWork.POST_WORK, PostWork)
  }
}

function* PostWork(action: any): SagaIterator {
  try {
    const { token, work } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    const { workId } = yield call(postWorkFrost, { token, work })
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.NotificationBar.onShowNotificationBar({
        type: 'link-success',
        message: `https://explorer-testnet.qa.poetnetwork.net/works/${workId}`,
      }))
    yield call(delay, 8000)
    yield put(Actions.NotificationBar.onHideNotificationBar())
    yield call(delay, 2000)
    yield put(Actions.NotificationBar.onResetNotificationBar())
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
