import { Frost } from '@poetapp/frost-client'
import { Actions } from 'actions/index'
import { browserHistory } from 'react-router'
import { delay } from 'redux-saga'
import { call, takeLatest, put } from 'redux-saga/effects'
const { toast } = require('react-toastify')

async function signInFrost(data: {
  readonly email: string
  readonly password: string
}) {
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
    const { token } = yield call(signInFrost, { email, password })
    yield put(
      Actions.SignIn.onSignInSuccess({ token, ...{ profile: { email } } })
    )
    yield put(Actions.Profile.onProfile({ token }))
    yield put(Actions.LoadingPage.onLoadingFull())
    yield call(delay, 300)
    browserHistory.push('/dashboard')
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.SignIn.onSignInError(e))
    yield call(delay, 300)
    yield put(Actions.SignIn.onSignInClearError())
    toast.error(e, {
      className: 'toast',
      autoClose: 2500
    })
  }
}
