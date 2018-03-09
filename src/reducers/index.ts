import { changePassword } from 'reducers/ChangePassword.reducer'
import { changePasswordToken } from 'reducers/ChangePasswordToken.reducer'
import { forgotPassword } from 'reducers/ForgotPassword.reducer'
import { loadingPage } from 'reducers/LoadingPage.reducer'
import { profile } from 'reducers/Profile.reducer'
import { router } from 'reducers/Router.reducer'
import { sendEmailVerifiedAccount } from 'reducers/SendEmailVerifiedAccount.reducer'
import { signIn } from 'reducers/SignIn.reducer'
import { signUp } from 'reducers/SignUp.reducer'
import { user } from 'reducers/User.reducer'
import { verifiedAccount } from 'reducers/VerfiedAccount.reducer'

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
  profile
}
