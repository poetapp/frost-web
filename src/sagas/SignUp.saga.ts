import { Frost } from '@poetapp/frost-client'
import { browserHistory } from 'react-router'
import { call, takeLatest, put } from 'redux-saga/effects'
import { Actions } from '../actions/index'

async function signUpFrost(data: { email: string; password: string }) {
  const { email, password } = data
  const frost = new Frost({ host: '/api' })
  return await frost.create(email, password)
}

export function SignUpSaga() {
  return function*() {
    yield takeLatest(Actions.SignUp.SIGN_UP, SignUp)
  }
}

function* SignUp(action: any) {
  try {
    const { email, password } = action.payload
    const user = yield call(signUpFrost, { email, password })
    yield put(Actions.SignUp.onSignUpSuccess({ ...user, email }))
    browserHistory.push('/dashboard')
  } catch (e) {
    yield put(Actions.SignUp.onSignUpError(e))
    // Todo: Error message in UI
  }
}
