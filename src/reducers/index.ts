import { changePassword } from './ChangePassword.reducer'
import { forgotPassword } from './ForgotPassword.reducer'
import { loadingPage } from './LoadingPage.reducer'
import { router } from './Router.reducer'
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
  changePassword,
  verifiedAccount,
  loadingPage
}
