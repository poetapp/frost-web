import { genEmail, getLocation, pages, SITE } from '../helpers'
import { TokenPage } from '../page-objects/token-page'

fixture `API tokens`
  .page `${SITE}${pages.TOKEN}`
