import { ChangePasswordTokenSaga } from 'sagas/ChangePasswordToken.saga'
import { ForgotPasswordSaga } from 'sagas/ForgotPassword.saga'
import { GetApiTokensSaga } from 'sagas/GetApiTokens'
import { GetProfileSaga } from 'sagas/GetProfile.saga'
import { SendEmailVerifiedAccountSaga } from 'sagas/SendEmailVerifiedAccount.saga'
import { SignInSaga } from 'sagas/SignIn.saga'
import { SignOutSaga } from 'sagas/SignOut.saga'
import { SignUpSaga } from 'sagas/SignUp.saga'
import { VerifiedAccountSaga } from 'sagas/VerifiedAccount.saga'

export const sagas = [
  SignUpSaga,
  SignInSaga,
  SignOutSaga,
  GetApiTokensSaga,
  ForgotPasswordSaga,
  ChangePasswordTokenSaga,
  VerifiedAccountSaga,
  SendEmailVerifiedAccountSaga,
  GetProfileSaga
]
