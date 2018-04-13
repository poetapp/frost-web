import { ChangePasswordTokenSaga } from './ChangePasswordToken.saga'
import { CreateApiTokenSaga } from './CreateApiToken.saga'
import { DeleteApiTokenSaga } from './DeleteApiToken.saga'
import { ForgotPasswordSaga } from './ForgotPassword.saga'
import { GetApiTokensSaga } from './GetApiTokens.saga'
import { GetProfileSaga } from './GetProfile.saga'
import { SendEmailVerifiedAccountSaga } from './SendEmailVerifiedAccount.saga'
import { SignInSaga } from './SignIn.saga'
import { SignOutSaga } from './SignOut.saga'
import { SignUpSaga } from './SignUp.saga'
import { VerifiedAccountSaga } from './VerifiedAccount.saga'
export const sagas: ReadonlyArray<any> = [
  SignUpSaga,
  SignInSaga,
  SignOutSaga,
  GetApiTokensSaga,
  ForgotPasswordSaga,
  ChangePasswordTokenSaga,
  VerifiedAccountSaga,
  SendEmailVerifiedAccountSaga,
  GetProfileSaga,
  DeleteApiTokenSaga,
  CreateApiTokenSaga
]
