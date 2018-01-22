import { router } from './Router.reducer'
import { signIn } from './SignIn.reducer'
import { signUp } from './SignUp.reducer'
import { user } from './User.reducer'

export const reducers = {
  signIn,
  signUp,
  user,
  router
}
