import { Frost } from '@po.et/frost-client'
import { Actions } from 'actions'
import { delay, SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'
const { toast } = require('react-toastify')

import { Configuration } from 'configuration'

const FrostClient = new Frost({ host: Configuration.frostApiUrl })

export function WorkClaimFormSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.WorkClaimForm.SUBMIT, handleOnWorkClaimSubmit)
    yield takeLatest(Actions.WorkClaimForm.SUBMIT_SUCCESS, handleOnWorkClaimSubmitSuccess)
    yield takeLatest(Actions.WorkClaimForm.SUBMIT_ERROR, handleOnWorkClaimSubmitError)
  }
}

export function* handleOnWorkClaimSubmit(action: any): SagaIterator {
  try {
    const { token, work } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    const { workId } = yield call([FrostClient, FrostClient.createWork], token, work)
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.WorkClaimForm.onSubmitSuccess({ workId }))
  } catch (error) {
    if (error.message) yield put(Actions.WorkClaimForm.onSubmitError(error.message))
    else yield put(Actions.WorkClaimForm.onSubmitError(error))

  }
}

export function* handleOnWorkClaimSubmitSuccess({ payload: { workId } }: any): SagaIterator {
  yield put(Actions.NotificationBar.onShowNotificationBar({
    type: 'link-success',
    message: `${Configuration.mainExplorerUrl}/works/${workId}`,
  }))
  yield call(delay, 3000)
  yield put(Actions.NotificationBar.onHideNotificationBar())
  yield call(delay, 2000)
  yield put(Actions.NotificationBar.onResetNotificationBar())
}

export function* handleOnWorkClaimSubmitError({ payload: error }: any): SagaIterator {
  yield put(Actions.LoadingPage.onLoadingFull())
  yield call(toast.error, error, {
    className: 'toast',
    autoClose: 2500,
  })
  yield call(delay, 300)
  yield put(Actions.WorkClaimForm.onClearError())
}
