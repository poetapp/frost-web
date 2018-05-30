import { Frost } from '@poetapp/frost-client'
import { Actions } from 'actions/index'
import { SagaIterator, delay } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'
const { toast } = require('react-toastify')

async function CreateApiTokenFrost(apiToken: string): Promise<{ readonly apiToken: string }> {
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
    yield put(Actions.LoadingPage.onLoadingOn())
    yield put(Actions.NotificationBar.onResetNotificationBar())
    const { token } = action.payload
    const { apiToken } = yield call(CreateApiTokenFrost, token)
    yield put(Actions.ApiTokens.onCreateApiTokenSuccess(apiToken))
    yield put(
      Actions.NotificationBar.onShowNotificationBar({
        type: 'success',
        message: 'API TOKEN SUCCESSFULLY CREATED',
      })
    )
    yield put(Actions.LoadingPage.onLoadingFull())
    yield call(delay, 2000)
    yield put(Actions.NotificationBar.onHideNotificationBar())
    yield call(delay, 2000)
    yield put(Actions.NotificationBar.onResetNotificationBar())
  } catch (e) {
    yield put(Actions.ApiTokens.onCreateApiTokenError(e))
    yield put(Actions.LoadingPage.onLoadingFull())
    const errorMessage = typeof e === 'object' ? e.message : e
    if (e.includes('Expired token')) {
      const message = 'Your session has expired. Please logout and login again.'
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
