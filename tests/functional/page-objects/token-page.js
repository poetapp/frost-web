import { Selector } from 'testcafe'

const PAGE_CLASS = '.CreateToken'
const pageClass = Selector(PAGE_CLASS)
const apiTokens = Selector(`${PAGE_CLASS} .BoxToken__item`)
const addTokenAction = Selector(`${PAGE_CLASS} .CreateTokenContainer__CreateToken__button`)
const deleteTokenAction = Selector(`${PAGE_CLASS} .BoxToken__item__actions`)
const deleteTokenConfirm = Selector(`${PAGE_CLASS} .DeleteToken .Button__danger`)
const toggleNetwork = Selector(`.ToggleMainnet__toggle`)

const deleteToken = async (t, index) => {
  await t.click(deleteTokenAction.nth(index))
  await deleteTokenConfirm()
  await t.click(deleteTokenConfirm)
}

export const TokenPage = {
  pageClass,
  apiTokens,
  addTokenAction,
  deleteToken,
  toggleNetwork,
}
