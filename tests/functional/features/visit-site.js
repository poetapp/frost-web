import { routes } from '../helpers'
import { HomePage as page } from '../page-objects/home-page'

fixture `Visit home page test`
  .page `${routes.SITE}`

test(`Home page is loaded when visiting ${routes.SITE}`, async t => {
  const wasLoaded = await page.pageClass.exists
  await t.expect(wasLoaded).ok('page class not found')
})
