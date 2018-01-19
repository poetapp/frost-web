import { call, takeLatest, put } from 'redux-saga/effects'
import { Frost } from '@poetapp/frost-client';
import { browserHistory } from 'react-router';
import { Actions } from '../actions/index';

export function SignOutSaga() {
    return function*() {
        yield takeLatest(Actions.SignOut.SIGN_OUT, SignOut);
    }
}
  
function SignOut(action: any) {
    try {
        browserHistory.push('/login');
    } catch(e) {
        // Todo: Error message in UI
    }
}