import { Frost } from '@poetapp/frost-client'
import { call, takeLatest, put } from 'redux-saga/effects'
import { Actions } from '../actions/index'

async function GetApiTokensFrost(email: string) {
  const frost = new Frost({ host: '/api' })
  return await frost.forgotPassword(email)
}

export function ForgotPasswordSaga() {
  return function*() {
    yield takeLatest(Actions.ForgotPassword.FORGOT_PASSWORD, ForgotPassword)
  }
}

function* ForgotPassword(action: any) {
  try {
    const { email } = action.payload
    yield call(GetApiTokensFrost, email)
    yield put(Actions.ForgotPassword.onForgotPasswordSuccess())
  } catch (e) {
    yield put(Actions.ForgotPassword.onForgotPasswordError(e))
    // Todo: Error message in UI
  }
}
