import { Frost } from '@poetapp/frost-client'
import { Actions } from 'actions/index'
import { browserHistory } from 'react-router'
import { delay } from 'redux-saga'
import { call, takeLatest, put } from 'redux-saga/effects'

async function signUpFrost(data: {
  readonly email: string
  readonly password: string
}) {
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
    yield put(Actions.LoadingPage.onLoadingOn())
    const { token } = yield call(signUpFrost, { email, password })
    yield put(
      Actions.SignUp.onSignUpSuccess({ token, ...{ profile: { email } } })
    )
    yield put(Actions.Profile.onProfile({ token }))
    yield put(Actions.LoadingPage.onLoadingFull())
    yield call(delay, 300)
    browserHistory.push('/dashboard')
  } catch (e) {
    const { html } = action.payload
    const { elements, form } = html

    if (e.includes('Password Requirements')) {
      elements.password.setCustomValidity(e)
      elements.password.focus()
    }

    if (e.includes('The specified account already exists.')) {
      elements.email.setCustomValidity(e)
      elements.email.focus()
    }
    form.reportValidity()
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.SignUp.onSignUpError(e))
    yield call(delay, 300)
    yield put(Actions.SignUp.onSignUpClearError())
  }
}
