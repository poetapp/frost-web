import { genEmail, getLocation, pages, SITE } from '../helpers'
import { HomePage } from '../page-objects/home-page'
import { LoginRegisterPage } from '../page-objects/login-register-page'
import { DashboardPage } from '../page-objects/dashboard-page'

const { signUp, signUpNoDisclaimer } = LoginRegisterPage
const password = 'Foo@1234foo'

fixture `User sign up`
  .page `${SITE}${pages.LOGIN}`

test('Creates an account when sign up form data is valid', async t => {
  const should = `Should load the dashboard page at ${pages.DASHBOARD}`
  const expected = pages.DASHBOARD
  const userEmail = genEmail('foo')

  await LoginRegisterPage.pageClass()
  await signUp(t, userEmail, password)
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Fails signup with an existing email address', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const duplicateUserEmail = genEmail('foo')

  // Create a user account and logout.
  await LoginRegisterPage.pageClass()
  await signUp(t, duplicateUserEmail, password)
  await DashboardPage.pageClass()
  await t.click(DashboardPage.logoutButton)

  // Create another user account with the same email address.
  await LoginRegisterPage.pageClass()
  await signUp(t, duplicateUserEmail, password)

  // Do not end up on the dashboard page.
  // TODO: how to check for Joi validation error toasts?
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Fails signup without a valid email address', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN

  await LoginRegisterPage.pageClass()
  await signUp(t, 'foo', password)
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Fails signup without a valid password', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const userEmail = genEmail('foo')

  await LoginRegisterPage.pageClass()
  await signUp(t, userEmail, 'password')
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Fails signup when not agreeing to the disclaimer', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const userEmail = genEmail('foo')

  await LoginRegisterPage.pageClass()
  await signUp(t, userEmail, password, { skipDisclaimer: true })
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})
