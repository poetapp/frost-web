import { ChangePasswordSaga } from './ChangePassword.saga'
import { ForgotPasswordSaga } from './ForgotPassword.saga'
import { GetApiTokensSaga } from './GetApiTokens'
import { SignInSaga } from './SignIn.saga'
import { SignOutSaga } from './SignOut.saga'
import { SignUpSaga } from './SignUp.saga'

export const sagas = [
  SignUpSaga,
  SignInSaga,
  SignOutSaga,
  GetApiTokensSaga,
  ForgotPasswordSaga,
  ChangePasswordSaga
]
