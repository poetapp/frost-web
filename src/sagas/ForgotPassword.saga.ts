import { Frost } from '@poetapp/frost-client'
import { delay } from 'redux-saga'
import { call, takeLatest, put } from 'redux-saga/effects'
import { Actions } from '../actions/index'

async function GetApiTokensFrost(email: string) {
  const frost = new Frost({ host: '/api' })
  return await frost.sendEmailForgotPassword(email)
}

export function ForgotPasswordSaga() {
  return function*() {
    yield takeLatest(Actions.ForgotPassword.FORGOT_PASSWORD, ForgotPassword)
  }
}

function* ForgotPassword(action: any) {
  try {
    const { email } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    yield call(GetApiTokensFrost, email)
    yield put(Actions.ForgotPassword.onForgotPasswordSuccess())
    yield put(Actions.LoadingPage.onLoadingFull())
    yield call(delay, 300)
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.ForgotPassword.onForgotPasswordError(e))
  }
}
