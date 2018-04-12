import { changePassword } from './ChangePassword.reducer'
import { changePasswordToken } from './ChangePasswordToken.reducer'
import { deleteApiToken } from './DeleteApiToken.reducer'
import { forgotPassword } from './ForgotPassword.reducer'
import { loadingPage } from './LoadingPage.reducer'
import { modal } from './Modal.reducer'
import { profile } from './Profile.reducer'
import { router } from './Router.reducer'
import { sendEmailVerifiedAccount } from './SendEmailVerifiedAccount.reducer'
import { signIn } from './SignIn.reducer'
import { signUp } from './SignUp.reducer'
import { user } from './User.reducer'
import { verifiedAccount } from './VerfiedAccount.reducer'

export const reducers = {
  signIn,
  signUp,
  user,
  router,
  forgotPassword,
  changePasswordToken,
  changePassword,
  verifiedAccount,
  loadingPage,
  sendEmailVerifiedAccount,
  profile,
  modal,
  deleteApiToken
}
