import { Frost } from '@poetapp/frost-client'
import * as moment from 'moment'
import { call, takeLatest, put } from 'redux-saga/effects'
import { Actions } from '../actions/index'

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
    const apiTokens = tokens.apiTokens.map((token: string) => {
      const jwtDecoded = parseJwt(token)

      return {
        token,
        dateCreated: moment.unix(jwtDecoded.iat).format('MM/DD/YYYY hh:mm a'),
        expiration: moment.unix(jwtDecoded.exp).format('MM/DD/YYYY hh:mm a'),
        isExpired: !moment(moment.now()).isAfter(jwtDecoded.exp)
      }
    })

    yield put(Actions.ApiTokens.onGetApiTokensSuccess(apiTokens))
  } catch (e) {
    yield put(Actions.ApiTokens.onGetApiTokensError(e))
    // Todo: Error message in UI
  }
}
