import { Frost } from '@po.et/frost-client'
import { Actions } from 'actions/index'
import { delay, SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'
const { toast } = require('react-toastify')

async function GetApiTokensFrost(email: string): Promise<string> {
  const frost = new Frost({ host: '/api' })
  return await frost.sendEmailForgotPassword(email)
}

export function ForgotPasswordSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.ForgotPassword.FORGOT_PASSWORD, ForgotPassword)
  }
}

function* ForgotPassword(action: any): SagaIterator {
  try {
    const { email } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    yield call(GetApiTokensFrost, email)
    yield put(Actions.ForgotPassword.onForgotPasswordSuccess())
    yield put(Actions.LoadingPage.onLoadingFull())
    yield call(delay, 300)

    toast.success('Please verify your email account', {
      className: 'toast',
      autoClose: 2500,
    })
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.ForgotPassword.onForgotPasswordError(e))

    toast.error(e, {
      className: 'toast',
      autoClose: 2500,
    })
  }
}
