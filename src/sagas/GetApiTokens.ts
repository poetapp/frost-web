import { Frost } from '@poetapp/frost-client'
import { Actions } from 'actions/index'
import { ApiToken } from 'interfaces/Props'
import { call, takeLatest, put } from 'redux-saga/effects'

const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}

async function GetApiTokensFrost(apiToken: string) {
  const frost = new Frost({ host: '/api' })
  return await frost.getApiTokens(apiToken)
}

export function GetApiTokensSaga() {
  return function*() {
    yield [
      takeLatest(Actions.SignIn.SIGN_IN_SUCCESS, GetApiTokens),
      takeLatest(Actions.SignUp.SIGN_UP_SUCCESS, GetApiTokens),
      takeLatest(Actions.SetTokenLogin.SET_TOKEN_LOGIN, GetApiTokens)
    ]
  }
}

function* GetApiTokens(action: any) {
  try {
    const { token } = action.payload
    const tokens = yield call(GetApiTokensFrost, token)

    yield put(Actions.ApiTokens.onGetApiTokensSuccess(tokens.apiTokens))
  } catch (e) {
    yield put(Actions.ApiTokens.onGetApiTokensError(e))
    // Todo: Error message in UI
  }
}
