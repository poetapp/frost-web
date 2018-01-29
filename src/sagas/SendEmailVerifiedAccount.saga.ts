import { Frost } from '@poetapp/frost-client'
import { delay } from 'redux-saga'
import { call, takeLatest, put } from 'redux-saga/effects'
import { Actions } from '../actions/index'

async function SendEmailVerifiedAccountFrost(data: { token: string }) {
  const { token } = data
  const frost = new Frost({ host: '/api' })
  return await frost.sendEmailVerifyAccount(token)
}

export function SendEmailVerifiedAccountSaga() {
  return function*() {
    yield takeLatest(
      Actions.SendEmailVerifiedAccount.SEND_EMAIL_VERIFIED_ACCOUNT,
      SendEmailVerifiedAccount
    )
  }
}

function* SendEmailVerifiedAccount(action: any) {
  try {
    const { token } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    yield call(SendEmailVerifiedAccountFrost, { token })
    yield put(
      Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccountSuccess()
    )
    yield put(Actions.LoadingPage.onLoadingFull())
    yield call(delay, 1000 * 60)
    yield put(
      Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccountResetRetry()
    )
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(
      Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccountError(e)
    )
    yield call(delay, 300)
    yield put(
      Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccountClearError()
    )
    yield call(delay, 1000 * 60)
    yield put(
      Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccountResetRetry()
    )
  }
}
