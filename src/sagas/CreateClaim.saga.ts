import { Frost } from '@po.et/frost-client'
import { Actions } from 'actions'
import { toast } from 'react-toastify'
import { delay, SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'

import { Configuration } from 'configuration'

const FrostClient = new Frost({ host: Configuration.frostApiUrl })

export function CreateClaimSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.CreateClaim.CREATE_CLAIM, handleOnCreateClaim)
    yield takeLatest(Actions.CreateClaim.CREATE_CLAIM_SUCCESS, handleOnCreateClaimSuccess)
    yield takeLatest(Actions.CreateClaim.CREATE_CLAIM_ERROR, handleOnCreateClaimError)
  }
}

export function* handleOnCreateClaim(action: any): SagaIterator {
  try {
    const { token, work } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    const { workId } = yield call([FrostClient, FrostClient.createWork], token, work)
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.CreateClaim.onCreateClaimSuccess({ workId }))
  } catch (error) {
    if (error.message) yield put(Actions.CreateClaim.onCreateClaimError(error.message))
    else yield put(Actions.CreateClaim.onCreateClaimError(error))

  }
}

export function* handleOnCreateClaimSuccess({ payload: { workId } }: any): SagaIterator {
  yield put(Actions.NotificationBar.onShowNotificationBar({
    type: 'link-success',
    message: `${Configuration.mainExplorerUrl}/works/${workId}`,
  }))
  yield call(delay, 3000)
  yield put(Actions.NotificationBar.onHideNotificationBar())
  yield call(delay, 2000)
  yield put(Actions.NotificationBar.onResetNotificationBar())
}

export function* handleOnCreateClaimError({ payload: error }: any): SagaIterator {
  yield put(Actions.LoadingPage.onLoadingFull())
  yield call(toast.error, error, {
    className: 'toast',
    autoClose: 2500,
  })
  yield call(delay, 300)
  yield put(Actions.CreateClaim.onCreateClaimClearError())
}
