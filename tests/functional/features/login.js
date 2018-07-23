import { routes } from '../helpers'
import { HomePage } from '../page-objects/home-page'
import { LoginRegisterPage } from '../page-objects/login-register-page'

fixture `Login tests`
  .page `${routes.SITE}`

test(`Clicking the login/register button takes the user to the login page`, async t => {
  await HomePage.goToLoginRegisterPage(t)
  const actual = await LoginRegisterPage.pageClass.exists
  await t.expect(actual).ok('LoginRegisterPage class not found')
})
