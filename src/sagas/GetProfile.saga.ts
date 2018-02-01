import { Frost } from '@poetapp/frost-client'
import { call, takeLatest, put } from 'redux-saga/effects'
import { Actions } from '../actions/index'

async function GetProfileFrost(token: string, password: string) {
  const frost = new Frost({ host: '/api' })
  return await frost.getProfile(token)
}

export function GetProfileSaga() {
  return function*() {
    yield [
      takeLatest(Actions.Profile.PROFILE, GetProfile),
      takeLatest(
        Actions.ChangePasswordToken.CHANGE_PASSWORD_TOKEN_SUCCESS,
        GetProfile
      )
    ]
  }
}

function* GetProfile(action: any) {
  try {
    const { token } = action.payload
    const profile = yield call(GetProfileFrost, token)
    yield put(Actions.Profile.onProfileSuccess(profile))
  } catch (e) {
    yield put(Actions.Profile.onProfileError(e))
  }
}