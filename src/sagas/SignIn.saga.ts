import { Frost } from '@poetapp/frost-client'
import { browserHistory } from 'react-router'
import { delay } from 'redux-saga'
import { call, takeLatest, put } from 'redux-saga/effects'
import { Actions } from '../actions/index'

async function signInFrost(data: { email: string; password: string }) {
  const { email, password } = data
  const frost = new Frost({ host: '/api' })
  return await frost.login(email, password)
}

export function SignInSaga() {
  return function*() {
    yield takeLatest(Actions.SignIn.SIGN_IN, SignIn)
  }
}

function* SignIn(action: any) {
  try {
    const { email, password } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    const user = yield call(signInFrost, { email, password })
    yield put(Actions.SignIn.onSignInSuccess({ ...user, email }))
    yield put(Actions.LoadingPage.onLoadingFull())
    yield call(delay, 300)
    browserHistory.push('/dashboard')
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.SignIn.onSignInError(e))
    yield call(delay, 300)
    yield put(Actions.SignIn.onSignInClearError())
  }
}
