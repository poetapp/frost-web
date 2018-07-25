import { genEmail, getLocation, pages, SITE } from '../helpers'
import { HomePage } from '../page-objects/home-page'
import { LoginRegisterPage } from '../page-objects/login-register-page'
import { DashboardPage } from '../page-objects/dashboard-page'

const { signUp, signUpNoDisclaimer } = LoginRegisterPage
const password = 'Foo@1234foo'

fixture `User sign up`
  .page `${SITE}${pages.LOGIN}`

test('Correctly filling in the sign up form', async t => {
  const should = `Should load the dashboard page at ${pages.DASHBOARD}`
  const expected = pages.DASHBOARD
  const userEmail = genEmail('foo')

  await LoginRegisterPage.pageClass
  await signUp(t, userEmail, password)
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Entering an existing email address', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const duplicateUserEmail = genEmail('foo')

  // Create a user account and logout.
  await LoginRegisterPage.pageClass
  await signUp(t, duplicateUserEmail, password)
  await DashboardPage.pageClass
  await t.click(DashboardPage.logoutButton)

  // Create another user account with the same email address.
  await LoginRegisterPage.pageClass
  await signUp(t, duplicateUserEmail, password)

  // Do not end up on the dashboard page.
  // TODO: how to check for Joi validation error toasts?
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Entering an invalid email address', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN

  await LoginRegisterPage.pageClass
  await signUp(t, 'foo', password)
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Entering an invalid password', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const userEmail = genEmail('foo')

  await LoginRegisterPage.pageClass
  await signUp(t, userEmail, 'password')
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Not agreeing to the disclaimer stays on sign up page', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const userEmail = genEmail('foo')

  await LoginRegisterPage.pageClass
  await signUp(t, userEmail, password, { skipDisclaimer: true })
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})
