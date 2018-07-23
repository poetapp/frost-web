import { genEmail, routes } from '../helpers'
import { HomePage } from '../page-objects/home-page'
import { LoginRegisterPage } from '../page-objects/login-register-page'
import { DashboardPage } from '../page-objects/dashboard-page'

const { signUp, signUpNoDisclaimer } = LoginRegisterPage
const password = 'Foo@1234foo'

fixture `User sign up tests`
  .page `${routes.LOGIN_PATH}`

test('A user can fill in a form to create an account', async t => {
  const userEmail = genEmail('foo')

  await LoginRegisterPage.pageClass
  await signUp(t, userEmail, password)
  const actual = await DashboardPage.pageClass
  await t.expect(actual.exists).ok('DashboardPage class not found')
})

test('A user cannot create an account with a duplicate email address', async t => {
  const duplicateUserEmail = genEmail('foo')

  // Create a new user account.
  await LoginRegisterPage.pageClass
  await signUp(t, duplicateUserEmail, password)

  await DashboardPage.pageClass
  await t.click(DashboardPage.logoutButton)

  // Create a new user account with the same email address.
  await LoginRegisterPage.pageClass
  await signUp(t, duplicateUserEmail, password)

  // Do not end up on the dashboard page.
  // TODO: how to check for Joi validation error toasts?
  const actual = await DashboardPage.pageClass
  await t.expect(actual.exists).notOk('LoginRegister class not found')
})

test('A user must enter a valid email address', async t => {
  await LoginRegisterPage.pageClass
  await signUp(t, 'foo', password)

  const actual = await DashboardPage.pageClass
  await t.expect(actual.exists).notOk('LoginRegister class not found')
})

test('A user must enter a valid password to create an account', async t => {
  const userEmail = genEmail('foo')

  await LoginRegisterPage.pageClass
  await signUp(t, userEmail, 'password')

  const actual = await DashboardPage.pageClass
  await t.expect(actual.exists).notOk('LoginRegister class not found')
})

test('A user must agree to disclaimer to create an account', async t => {
  const userEmail = genEmail('foo')

  await LoginRegisterPage.pageClass
  await signUp(t, userEmail, password, { skipDisclaimer: true })

  const actual = await DashboardPage.pageClass
  await t.expect(actual.exists).notOk('LoginRegister class not found')
})
