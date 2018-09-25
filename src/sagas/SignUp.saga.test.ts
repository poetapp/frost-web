import { toast } from 'react-toastify'
import { delay } from 'redux-saga'
import { takeLatest, call, put } from 'redux-saga/effects'
import { describe } from 'riteway'

import { Actions } from '../actions/index'
import { SignUpSaga, SignUp, signUpFrost } from './SignUp.saga'

describe('SignUp Saga', async (should: any) => {
  const { assert } = should()

  const iterator = SignUpSaga()()
  
  assert({
    given: 'sign up action',
    should: 'handle sign up request',
    actual: iterator.next().value,
    expected: takeLatest(Actions.SignUp.SIGN_UP, SignUp),
  })
})

describe('SignUp() Success', async (should: any) => {
  const { assert } = should()
  const email = 'test@email.com'
  const password = 'test'
  const token = 'test-token'
  const iterator = SignUp(Actions.SignUp.onSignUp({ email, password }))

  assert({
    given: 'sign up action',
    should: 'set loading status',
    actual: iterator.next().value,
    expected: put(Actions.LoadingPage.onLoadingOn()),
  })

  assert({
    given: 'next step',
    should: 'register user with frost',
    actual: iterator.next().value,
    expected: call(signUpFrost, { email, password }),
  })

  assert({
    given: 'next step',
    should: 'clear loading/ set user',
    actual: iterator.next({ token }).value,
    expected: put(Actions.SignUp.onSignUpSuccess({ token, ...{ profile: { email } } })),
  })

  assert({
    given: 'next step',
    should: 'set user profile',
    actual: iterator.next({ token }).value,
    expected: put(Actions.Profile.onProfile({ token })),
  })

  assert({
    given: 'next step',
    should: 'set loading complete',
    actual: iterator.next({ token }).value,
    expected: put(Actions.LoadingPage.onLoadingFull()),
  })

  assert({
    given: 'next step',
    should: 'delay 300',
    actual: iterator.next({ token }).value,
    expected: call(delay, 300),
  })
})

describe('SignUp() Error - string', async (should: any) => {
  const { assert } = should()
  const email = 'test@email.com'
  const password = 'test'
  const e = 'test-token'
  const iterator = SignUp(Actions.SignUp.onSignUp({ email, password }))

  assert({
    given: 'sign up action',
    should: 'set loading status',
    actual: iterator.next().value,
    expected: put(Actions.LoadingPage.onLoadingOn()),
  })

  assert({
    given: 'next step with error',
    should: 'set loading to complete',
    actual: iterator.throw(e).value,
    expected: put(Actions.LoadingPage.onLoadingFull()),
  })

  assert({
    given: 'next step',
    should: 'set error message',
    actual: iterator.next().value,
    expected: put(Actions.SignUp.onSignUpError(e)),
  })

  assert({
    given: 'next step',
    should: 'delay 300',
    actual: iterator.next().value,
    expected: call(delay, 300),
  })

  assert({
    given: 'next step',
    should: 'clear error message',
    actual: iterator.next().value,
    expected: put(Actions.SignUp.onSignUpClearError()),
  })

  assert({
    given: 'next step',
    should: 'parse json',
    actual: iterator.next().value,
    expected: call(JSON.parse, e),
  })

  assert({
    given: 'next step',
    should: 'toast message',
    actual: iterator.next().value,
    expected: call(toast.error, e, {
        className: 'toast',
        autoClose: 2500,
      }),
  })
})

describe('SignUp() Error - JSON String with message property', async (should: any) => {
  const { assert } = should()
  const email = 'test@email.com'
  const password = 'test'
  const e = '{ "message": "test-token" }'
  const iterator = SignUp(Actions.SignUp.onSignUp({ email, password }))

  assert({
    given: 'sign up action',
    should: 'set loading status',
    actual: iterator.next().value,
    expected: put(Actions.LoadingPage.onLoadingOn()),
  })

  assert({
    given: 'next step with error',
    should: 'set loading to complete',
    actual: iterator.throw(e).value,
    expected: put(Actions.LoadingPage.onLoadingFull()),
  })

  assert({
    given: 'next step',
    should: 'set error message',
    actual: iterator.next().value,
    expected: put(Actions.SignUp.onSignUpError(e)),
  })

  assert({
    given: 'next step',
    should: 'delay 300',
    actual: iterator.next().value,
    expected: call(delay, 300),
  })

  assert({
    given: 'next step',
    should: 'clear error message',
    actual: iterator.next().value,
    expected: put(Actions.SignUp.onSignUpClearError()),
  })

  assert({
    given: 'next step',
    should: 'parse json string',
    actual: iterator.next().value,
    expected: call(JSON.parse, e),
  })

  assert({
    given: 'next step',
    should: 'toast message',
    actual: iterator.next().value,
    expected: call(toast.error, 'test-token', {
      className: 'toast',
      autoClose: 2500,
    }),
  })
})
