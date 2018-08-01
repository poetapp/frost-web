import { getLocation, pages, SITE } from '../helpers'
import { LoginRegisterPage } from '../page-objects/login-register-page'
import { DashboardPage } from '../page-objects/dashboard-page'

fixture `User logout`
  .page `${SITE}${pages.DASHBOARD}`

test.only(`The logout button on the ${pages.DASHBOARD} page signs a user out`, async t => {
  const should = `Should load the dashboard page at ${pages.DASHBOARD}`
  const expected = pages.LOGIN
  const { email, password } = await LoginRegisterPage.createUser(t)
  await DashboardPage.pageClass()

  await t.click(DashboardPage.logoutButton)
  await LoginRegisterPage.pageClass()

  // Try to go to a protected page
  await t.navigateTo(`${SITE}${pages.DASHBOARD}`)
  const actual = await getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})
