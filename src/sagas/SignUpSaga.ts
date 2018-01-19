import { takeLatest, delay } from 'redux-saga';
import { call } from 'redux-saga/effects'
import { Frost } from '@poetapp/frost-client';
import { browserHistory } from 'react-router';
import { Actions } from '../actions/index';

async function signUpFrost(data: { email: string, password: string }) {
    const { email, password } = data;
    const frost = new Frost({ host: 'http://localhost:4000/api' })
    return await frost.create(email, password);
}

export function SignUpSaga() {
    return function*() {
        yield takeLatest(Actions.SignUp.SIGN_UP, SignUp);
    }
}
  
function* SignUp(action: any) {
    try {
        const { email, password } = action.payload;
        const user = yield call(signUpFrost, { email, password });
        browserHistory.push('/dashboard');
    } catch(e) {
        // Todo: Error message in UI
    }
}