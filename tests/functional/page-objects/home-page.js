import { Selector } from 'testcafe'

const pageClass = Selector('main.Home')
const loginButton = Selector('a[href="/login"]')

export const HomePage = {
  pageClass,
  loginButton,

  clickLoginRegister: async t => {
    const theLoginButton = await loginButton
    await t.click(theLoginButton)
  }
}

