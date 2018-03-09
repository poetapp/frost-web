import { ChangePasswordToken } from 'components/pages/ChangePasswordToken/ChangePasswordToken.loader'
import { Dashboard } from 'components/pages/Dashboard/Dashboard.loader'
import { Disclaimer } from 'components/pages/Disclaimer/Disclaimer.loader'
import { ForgotPassword } from 'components/pages/ForgotPassword/ForgotPassword.loader'
import { Home } from 'components/pages/Home/Home.loader'
import { Privacy } from 'components/pages/Privacy/Privacy.loader'
import { RegisterLogin } from 'components/pages/RegisterLogin/RegisterLogin.loader'
import { Token } from 'components/pages/Token/Token.loader'
import { VerifiedAccount } from 'components/pages/VerifiedAccount/VerifiedAccount.loader'

export const pagesLoaders = [
  RegisterLogin,
  Dashboard,
  Token,
  Home,
  ForgotPassword,
  ChangePasswordToken,
  VerifiedAccount,
  Privacy,
  Disclaimer
]
