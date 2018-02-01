import { ChangePasswordToken } from './ChangePasswordToken/ChangePasswordToken.loader'
import { Dashboard } from './Dashboard/Dashboard.loader'
import { ForgotPassword } from './ForgotPassword/ForgotPassword.loader'
import { Home } from './Home/Home.loader'
import { RegisterLogin } from './RegisterLogin/RegisterLogin.loader'
import { Token } from './Token/Token.loader'
import { VerifiedAccount } from './VerifiedAccount/VerifiedAccount.loader'

export const pagesLoaders = [
  RegisterLogin,
  Dashboard,
  Token,
  Home,
  ForgotPassword,
  ChangePasswordToken,
  VerifiedAccount
]
