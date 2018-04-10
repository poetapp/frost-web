import { Frost } from '@poetapp/frost-client'
import { Actions } from 'actions/index'
import { SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'

async function CreateApiTokenFrost(
  apiToken: string
): Promise<{ readonly apiToken: string }> {
  const frost = new Frost({ host: '/api' })
  return await frost.createApiToken(apiToken)
}

export function CreateApiTokenSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.ApiTokens.CREATE_API_TOKEN, GetApiTokens)
  }
}

function* GetApiTokens(action: any): SagaIterator {
  try {
    const { token } = action.payload
    const { apiToken } = yield call(CreateApiTokenFrost, token)

    yield put(Actions.ApiTokens.onCreateApiTokenSuccess(apiToken))
  } catch (e) {
    yield put(Actions.ApiTokens.onCreateApiTokenError(e))
  }
}
