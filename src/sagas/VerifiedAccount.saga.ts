import { Frost } from '@poetapp/frost-client'
import { call, takeLatest, put } from 'redux-saga/effects'
import { Actions } from '../actions/index'

async function GetApiTokensFrost(token: string, password: string) {
  const frost = new Frost({ host: '/api' })
  return await frost.verifyAccount(token)
}

export function VerifiedAccountSaga() {
  return function*() {
    yield takeLatest(Actions.VerifiedAccount.VERIFIED_ACCOUNT, VerifiedAccount)
  }
}

function* VerifiedAccount(action: any) {
  try {
    const { token, password } = action.payload
    yield call(GetApiTokensFrost, token, password)
    yield put(Actions.VerifiedAccount.onVerifiedAccountSuccess())
  } catch (e) {
    yield put(Actions.VerifiedAccount.onVerifiedAccountError(e))
    // Todo: Error message in UI
  }
}
