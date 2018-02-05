import { browserHistory } from 'react-router'
import { takeLatest } from 'redux-saga/effects'
import { Actions } from '../actions/index'

export function SignOutSaga() {
  return function*() {
    yield takeLatest(Actions.SignOut.SIGN_OUT, SignOut)
  }
}

function SignOut(action: any) {
  try {
    if (!(action.payload && action.payload.redirectLogin === false))
      browserHistory.push('/login')
  } catch (e) {
    // Todo: Error message in UI
  }
}
