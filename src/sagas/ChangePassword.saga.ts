import { Frost } from '@poetapp/frost-client'
import { call, takeLatest, put } from 'redux-saga/effects'
import { Actions } from '../actions/index'

async function GetApiTokensFrost(token: string, password: string) {
  const frost = new Frost({ host: '/api' })
  return await frost.changePassword(token, password)
}

export function ChangePasswordSaga() {
  return function*() {
    yield takeLatest(Actions.ChangePassword.CHANGE_PASSWORD, ChangePassword)
  }
}

function* ChangePassword(action: any) {
  try {
    const { token, password } = action.payload
    yield call(GetApiTokensFrost, token, password)
    yield put(Actions.ChangePassword.onChangePasswordSuccess())
  } catch (e) {
    yield put(Actions.ChangePassword.onChangePasswordError(e))
    // Todo: Error message in UI
  }
}
