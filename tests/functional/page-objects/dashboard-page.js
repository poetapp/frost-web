import { Selector } from 'testcafe'

const PAGE_CLASS = 'main.Dashboard'
const pageClass = Selector(PAGE_CLASS)
const logoutButton = Selector('.Logout__button')
const createTokenButton = Selector('.Panel.CreateToken')

export const DashboardPage = {
  createTokenButton,
  logoutButton,
  pageClass,
}
