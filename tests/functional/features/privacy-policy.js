import { pages, SITE } from '../helpers'
import { PrivacyPage } from '../page-objects/privacy-page'

fixture `Privacy page`
  .page `${SITE}${pages.PRIVACY}`

test(`The privacy page exists at '${pages.PRIVACY}'`, async t => {
  const should = 'Should load the privacy page'
  const expected = true

  const page = await PrivacyPage.pageClass
  const actual = await page.exists

  await t.expect(actual).eql(expected, should)
})
