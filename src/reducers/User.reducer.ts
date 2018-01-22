import { Actions } from '../actions/index';
const { REHYDRATE } = require('redux-persist/constants');

const defaultState = {
  token: '',
  email: '',
};

export const user = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SignIn.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case Actions.SignOut.SIGN_OUT:
      return {
        ...state,
        token: '',
        email: '',
      };
    case REHYDRATE:
      return {
        ...state,
        ...action.payload.user
      };
  }
  return state || defaultState;
}
