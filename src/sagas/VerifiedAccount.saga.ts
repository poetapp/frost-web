import { Frost } from '@poetapp/frost-client'
import { browserHistory } from 'react-router'
import { delay } from 'redux-saga'
import { call, takeLatest, put } from 'redux-saga/effects'
import { Actions } from '../actions/index'
const { toast } = require('react-toastify')

async function GetApiTokensFrost(token: string, password: string) {
  const frost = new Frost({ host: '/api' })
  return await frost.verifyAccount(token)
}

export function VerifiedAccountSaga() {
  return function*() {
    yield takeLatest(Actions.VerifiedAccount.VERIFIED_ACCOUNT, VerifiedAccount)
  }
}

function* VerifiedAccount(action: any) {
  const toastId = toast.info('Verifying account...', {
    className: 'toast'
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
      autoClose: 2500
    })
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.VerifiedAccount.onVerifiedAccountError(e))
    yield call(delay, 300)
    yield put(Actions.VerifiedAccount.onVerifiedAccountClearError())

    toast.update(toastId, {
      render: e,
      type: toast.TYPE.ERROR,
      autoClose: 2500,
      className: 'toast'
    })
  }
}
