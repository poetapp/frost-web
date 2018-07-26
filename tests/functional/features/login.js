import { genEmail, getLocation, pages, SITE } from '../helpers'
import { LoginRegisterPage } from '../page-objects/login-register-page'
import { DashboardPage } from '../page-objects/dashboard-page'

const { createUser, login, signUp, signUpNoDisclaimer, validPassword } = LoginRegisterPage

fixture `User login`
  .page `${SITE}${pages.LOGIN}`

test(`Login as an existing user on ${pages.LOGIN}`, async t => {
  const should = `Should load the dashboard page at ${pages.DASHBOARD}`
  const expected = pages.DASHBOARD
  const { email, password } = await createUser(t)
  await DashboardPage.pageClass()
  await t.click(DashboardPage.logoutButton)

  await login(t, email, password)
  await DashboardPage.pageClass()
  const actual = await getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Fail login without a valid email address', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const badEmail = 'without-domain'

  await login(t, badEmail, 'Test@test12345')
  await LoginRegisterPage.pageClass()
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Fail login without a valid password', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const email = genEmail('test-acct')

  await login(t, email, 'password')
  await LoginRegisterPage.pageClass()
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Fail login when password is incorrect', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const { email, password } = await createUser(t)
  await DashboardPage.pageClass()
  await t.click(DashboardPage.logoutButton)
  const incorrectPassword = password + 'x'

  await login(t, email, incorrectPassword)
  await LoginRegisterPage.pageClass()
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Fail login without an existing account', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const email = genEmail('non-existing-foo')

  await login(t, email, validPassword)
  await LoginRegisterPage.pageClass()
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})
