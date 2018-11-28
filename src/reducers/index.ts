import { apiTokens } from './ApiTokens.reducer'
import { changeNetworkBitcoin } from './ChangeNetworkBitcoin.reducer'
import { changePassword } from './ChangePassword.reducer'
import { changePasswordToken } from './ChangePasswordToken.reducer'
import { createApiTokens } from './CreateApiTokens.reducer'
import { deleteApiToken } from './DeleteApiToken.reducer'
import { forgotPassword } from './ForgotPassword.reducer'
import { getApiTokens } from './GetApiTokens.reducer'
import { loadingPage } from './LoadingPage.reducer'
import { modal } from './Modal.reducer'
import { notificationBar } from './NotificationBar.reducer'
import { profile } from './Profile.reducer'
import { router } from './Router.reducer'
import { sendEmailVerifiedAccount } from './SendEmailVerifiedAccount.reducer'
import { signIn } from './SignIn.reducer'
import { signUp } from './SignUp.reducer'
import { user } from './User.reducer'
import { verifiedAccount } from './VerfiedAccount.reducer'
import { workClaimForm } from './WorkClaimForm.reducer'

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
  deleteApiToken,
  getApiTokens,
  createApiTokens,
  notificationBar,
  changeNetworkBitcoin,
  apiTokens,
  workClaimForm,
}
