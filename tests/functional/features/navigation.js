import { getLocation, pages, SITE } from '../helpers'
import { HomePage } from '../page-objects/home-page'
import { clickLoginRegister } from '../page-objects/login-register-page'

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
