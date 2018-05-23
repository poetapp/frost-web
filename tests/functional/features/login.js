import { SITE } from '../helpers'
import { HomePage as homePage } from '../page-objects/home-page'
import { LoginRegisterPage as loginRegisterPage } from '../page-objects/login-register-page'

fixture `Login tests`
  .page `${SITE}`

test(`Login button appears on the home page`, async t => {
  const loginButton = await homePage.loginButton.exists
  await t.expect(loginButton).ok('login button not found')
})

test(`Clicking the login/register button takes the user to the login page`, async t => {
  const loginButton = await homePage.loginButton
  await t.click(loginButton)
  const wasLoaded = await loginRegisterPage.pageClass.exists
  await t.expect(wasLoaded).ok('login/register page class not found')
})
