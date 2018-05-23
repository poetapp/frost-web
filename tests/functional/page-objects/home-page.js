import { Selector } from 'testcafe'

export const HomePage = {
  pageClass: Selector('main.Home'),
  loginButton: Selector('a[href="/login"]'),
}
