import { Frost } from '@poetapp/frost-client'
import { Actions } from 'actions/index'
import { delay, SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'

async function DeleteApiTokenFrost(
  token: string,
  tokenId: string
): Promise<string> {
  const frost = new Frost({ host: '/api' })
  return await frost.removeApiToken(token, tokenId)
}

export function DeleteApiTokenSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.DeleteApiToken.DELETE_API_TOKEN, DeleteApiToken)
  }
}

function* DeleteApiToken(action: any): SagaIterator {
  try {
    const { token, apiToken } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    yield call(DeleteApiTokenFrost, token, apiToken)
    yield put(Actions.DeleteApiToken.onDeleteApiTokenSuccess(apiToken))
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.Modal.onHideModal())
    yield call(delay, 300)
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.DeleteApiToken.onDeleteApiTokenError(e))
  }
}
