import { Frost } from '@poetapp/frost-client'
import { call, takeLatest, put } from 'redux-saga/effects'
import { Actions } from '../actions/index'

async function GetApiTokensFrost(apiToken: string) {
  const frost = new Frost({ host: '/api' })
  return await frost.getApiTokens(apiToken)
}

export function GetApiTokensSaga() {
  return function*() {
    yield [
      takeLatest(Actions.SignIn.SIGN_IN_SUCCESS, GetApiTokens),
      takeLatest(Actions.SignUp.SIGN_UP_SUCCESS, GetApiTokens),
      takeLatest(
        Actions.ChangePasswordToken.CHANGE_PASSWORD_TOKEN_SUCCESS,
        GetApiTokens
      )
    ]
  }
}

function* GetApiTokens(action: any) {
  try {
    const { token } = action.payload
    const tokens = yield call(GetApiTokensFrost, token)
    yield put(Actions.ApiTokens.onGetApiTokensSuccess(tokens))
  } catch (e) {
    yield put(Actions.ApiTokens.onGetApiTokensError(e))
    // Todo: Error message in UI
  }
}
