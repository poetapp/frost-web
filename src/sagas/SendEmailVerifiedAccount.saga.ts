import { Frost } from '@po.et/frost-client'
import { Actions } from 'actions/index'
import { delay, SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'

async function SendEmailVerifiedAccountFrost(data: { readonly token: string }): Promise<string> {
  const { token } = data
  const frost = new Frost({ host: '/api' })
  return await frost.sendEmailVerifyAccount(token)
}

export function SendEmailVerifiedAccountSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.SendEmailVerifiedAccount.SEND_EMAIL_VERIFIED_ACCOUNT, SendEmailVerifiedAccount)
  }
}

function* SendEmailVerifiedAccount(action: any): SagaIterator {
  try {
    const { token } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    yield call(SendEmailVerifiedAccountFrost, { token })
    yield put(Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccountSuccess())
    yield put(Actions.LoadingPage.onLoadingFull())
    yield call(delay, 1000 * 60)
    yield put(Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccountResetRetry())
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccountError(e))
    yield call(delay, 300)
    yield put(Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccountClearError())
    yield call(delay, 1000 * 60)
    yield put(Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccountResetRetry())
  }
}
