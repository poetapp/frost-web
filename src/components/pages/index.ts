import { ChangePasswordToken } from './ChangePasswordToken/ChangePasswordToken.loader'
import { Dashboard } from './Dashboard/Dashboard.loader'
import { Disclaimer } from './Disclaimer/Disclaimer.loader'
import { ForgotPassword } from './ForgotPassword/ForgotPassword.loader'
import { Home } from './Home/Home.loader'
import { Privacy } from './Privacy/Privacy.loader'
import { RegisterLogin } from './RegisterLogin/RegisterLogin.loader'
import { Token } from './Token/Token.loader'
import { VerifiedAccount } from './VerifiedAccount/VerifiedAccount.loader'

export const pagesLoaders: ReadonlyArray<any> = [
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
