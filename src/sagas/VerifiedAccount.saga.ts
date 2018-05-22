import { Frost } from '@poetapp/frost-client'
import { Actions } from 'actions/index'
import { browserHistory } from 'react-router'
import { delay, SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'
const { toast } = require('react-toastify')

async function GetApiTokensFrost(token: string, password: string): Promise<{ readonly token: string }> {
  const frost = new Frost({ host: '/api' })
  return await frost.verifyAccount(token)
}

export function VerifiedAccountSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.VerifiedAccount.VERIFIED_ACCOUNT, VerifiedAccount)
  }
}

function* VerifiedAccount(action: any): SagaIterator {
  const toastId = toast.info('Verifying account...', {
    className: 'toast',
  })

  try {
    const { token, password } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())

    const data = yield call(GetApiTokensFrost, token, password)
    yield put(Actions.VerifiedAccount.onVerifiedAccountSuccess())

    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.SignOut.onSignOut({ redirectLogin: false }))
    yield put(Actions.SetTokenLogin.onSetTokenLogin(data))

    yield call(delay, 1000)

    browserHistory.push('/dashboard')

    toast.success('Your account has been verified!', {
      className: 'toast',
      autoClose: 2500,
    })
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.VerifiedAccount.onVerifiedAccountError(e))
    yield call(delay, 300)
    yield put(Actions.VerifiedAccount.onVerifiedAccountClearError())

    if (e.includes('Email already verified')) {
      browserHistory.push('/dashboard')
      toast.info(e, {
        className: 'toast',
        autoClose: 2500,
      })
    } else if (e.includes('Expired token')) {
      const message = 'This link has expired. Please login and request a new validation email.'
      toast.update(toastId, {
        render: message,
        type: toast.TYPE.ERROR,
        className: 'toast',
        autoClose: false,
      })
    } else
      toast.update(toastId, {
        render: e,
        type: toast.TYPE.ERROR,
        autoClose: false,
        className: 'toast',
      })
  }
}
