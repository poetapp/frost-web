import { Frost } from '@po.et/frost-client'
import { Actions } from 'actions'
import { delay, SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'
const { toast } = require('react-toastify')

import { Configuration } from 'configuration'

async function DeleteApiTokenFrost(token: string, tokenId: string): Promise<string> {
  const frost = new Frost({ host: Configuration.frostApiUrl })
  return frost.removeApiToken(token, tokenId)
}

export function DeleteApiTokenSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.ApiTokens.DELETE_API_TOKEN, DeleteApiToken)
  }
}

function* DeleteApiToken(action: any): SagaIterator {
  try {
    const { token, apiToken } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    yield call(DeleteApiTokenFrost, token, apiToken)
    yield put(Actions.ApiTokens.onDeleteApiTokenSuccess({ apiToken }))
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.Modal.onHideModal())
    yield call(delay, 300)
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.ApiTokens.onDeleteApiTokenError(e))
    const errorMessage = typeof e === 'object' ? e.message : e
    if (e.includes('Expired token')) {
      const message = 'Your session has expired. Please login again.'
      yield put(Actions.SignOut.onSignOut({ redirectLogin: true }))
      toast.error(message, {
        className: 'toast',
        autoClose: 2500,
      })
    } else
      toast.error(errorMessage, {
        className: 'toast',
        autoClose: 2500,
      })
  }
}
