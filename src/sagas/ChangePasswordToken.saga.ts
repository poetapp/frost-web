import { Frost } from '@po.et/frost-client'
import { Actions } from 'actions/index'
import { browserHistory } from 'react-router'
import { delay, SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'
const { toast } = require('react-toastify')

import { Configuration } from 'configuration'

async function ChangePasswordTokenFrost(token: string, password: string): Promise<{ readonly token: string }> {
  const frost = new Frost({ host: Configuration.frostApiUrl })
  return frost.changePasswordWithToken(token, password)
}

export function ChangePasswordTokenSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.ChangePasswordToken.CHANGE_PASSWORD_TOKEN, ChangePasswordToken)
  }
}

function* ChangePasswordToken(action: any): SagaIterator {
  try {
    const { token, password } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())

    const data = yield call(ChangePasswordTokenFrost, token, password)
    yield put(Actions.ChangePasswordToken.onChangePasswordTokenSuccess(data))

    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.SignOut.onSignOut({ redirectLogin: false }))
    yield put(Actions.SetTokenLogin.onSetTokenLogin(data))

    yield call(delay, 1000)

    browserHistory.push('/dashboard')

    toast.success('Your password has been updated!', {
      className: 'toast',
      autoClose: 2500,
    })
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.ChangePasswordToken.onChangePasswordTokenError(e))
    yield call(delay, 300)
    yield put(Actions.ChangePasswordToken.onChangePasswordTokenClearError())

    toast.error(e, {
      className: 'toast',
      autoClose: 2500,
    })
  }
}
