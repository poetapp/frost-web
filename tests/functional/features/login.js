import { genEmail, getLocation, pages, SITE } from '../helpers'
import { HomePage } from '../page-objects/home-page'
import { LoginRegisterPage } from '../page-objects/login-register-page'
import { DashboardPage } from '../page-objects/dashboard-page'

const { login, signUp, signUpNoDisclaimer } = LoginRegisterPage
const password = 'Foo@1234foo'

fixture `User login`
  .beforeEach(async t => {
    t.ctx.userEmail = genEmail('foo')
    await signUp(t, t.ctx.userEmail, password)
    await t.click(DashboardPage.logoutButton)
  })
  .page `${SITE}${pages.LOGIN}`

test(`Login as an existing user on ${pages.LOGIN}`, async t => {
  const should = `Should load the dashboard page at ${pages.DASHBOARD}`
  const expected = pages.DASHBOARD
  const userEmail = t.ctx.userEmail

  await login(t, userEmail, password)
  await DashboardPage.pageClass()
  const actual = await getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Fail login without a valid email address', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const badEmail = 'foo'

  await login(t, badEmail, password)
  await LoginRegisterPage.pageClass()
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Fail login without a valid password', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const userEmail = t.ctx.userEmail

  await login(t, userEmail, 'password')
  await LoginRegisterPage.pageClass()
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test('Fail login without an existing account', async t => {
  const should = `Should stay on the login page ${pages.LOGIN}`
  const expected = pages.LOGIN
  const userEmail = genEmail('non-existing-foo')

  await login(t, userEmail, password)
  await LoginRegisterPage.pageClass()
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})
