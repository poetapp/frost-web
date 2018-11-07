import { Frost } from '@po.et/frost-client'
import { Actions } from 'actions'
import { SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'

import { Configuration } from 'Configuration'

async function GetApiTokensFrost(apiToken: string): Promise<{ readonly apiTokens: ReadonlyArray<string> }> {
  const frost = new Frost({ host: Configuration.frostApiUrl })
  return await frost.getApiTokens(apiToken)
}

export function GetApiTokensSaga(): () => IterableIterator<ReadonlyArray<ForkEffect>> {
  return function*(): IterableIterator<ReadonlyArray<ForkEffect>> {
    yield [
      takeLatest(Actions.SignIn.SIGN_IN_SUCCESS, GetApiTokens),
      takeLatest(Actions.SignUp.SIGN_UP_SUCCESS, GetApiTokens),
      takeLatest(Actions.SetTokenLogin.SET_TOKEN_LOGIN, GetApiTokens),
      takeLatest(Actions.ApiTokens.GET_API_TOKENS, GetApiTokens),
    ]
  }
}

function* GetApiTokens(action: any): SagaIterator {
  try {
    const { token } = action.payload
    const { apiTokens } = yield call(GetApiTokensFrost, token)
    yield put(Actions.ApiTokens.onGetApiTokensSuccess({ apiTokens }))
  } catch (e) {
    yield put(Actions.ApiTokens.onGetApiTokensError(e))
    // Todo: Error message in UI
  }
}
