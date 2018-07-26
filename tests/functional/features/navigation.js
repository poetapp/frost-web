import { getLocation, pages, SITE } from '../helpers'
import { HomePage } from '../page-objects/home-page'
import { LoginRegisterPage } from '../page-objects/login-register-page'
import { TokenPage } from '../page-objects/token-page'

fixture `Site navigation`
  .page `${SITE}${pages.HOME}`

test(`Visit the home page at '${pages.HOME}'`, async t => {
  const should = 'Should load the home page'
  const expected = true

  const page = await HomePage.pageClass
  const actual = Boolean(page.exists)

  await t.expect(actual).eql(expected, should)
})

test(`On the home page, click to navigate to the login/register page`, async t => {
  const should = `Should navigate to the login page at ${pages.LOGIN}`
  const expected = pages.LOGIN

  await HomePage.clickLoginRegister(t)
  const actual = getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test(`Navigating to ${pages.TOKEN} without logging in redirects to ${pages.LOGIN}`, async t => {
  const should = `Should load the login page at ${pages.LOGIN}`
  const expected = pages.LOGIN

  await t.navigateTo(`${SITE}${pages.TOKEN}`)
  await LoginRegisterPage.pageClass()
  const actual = await getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})

test(`A logged in user can access the api token page at ${pages.TOKEN}`, async t => {
  const should = `Should load the token page at ${pages.TOKEN}`
  const expected = pages.TOKEN
  await t
    .useRole(LoginRegisterPage.frostUser('fah@test.com', 'Foo@foo12345'))
    .navigateTo(`${SITE}${pages.TOKEN}`)

  await TokenPage.pageClass()
  const actual = await getLocation('pathname')

  await t.expect(actual).eql(expected, should)
})
