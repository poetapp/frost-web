import { Selector } from 'testcafe'

const pageClass = Selector('.RegisterLogin')
const signUpEmailInput = Selector('.RegisterLogin_signUp input[name="email"]')
const signUpPasswordInput = Selector('.RegisterLogin_signUp input[name="password"]')
const signUpConfirmPasswordInput = Selector('.RegisterLogin_signUp input[name="confirmPassword"]')
const signUpDisclaimer = Selector('.RegisterLogin_signUp input[name="testnet"]')
const signUpButton = Selector('.RegisterLogin_signUp .submit-button button')

export const LoginRegisterPage = {
  pageClass,
  signUpEmailInput,
  signUpPasswordInput,
  signUpConfirmPasswordInput,
  signUpDisclaimer,
  signUpButton,

  signUp: async (t, email, password, options = { skipDisclaimer: false }) => {
    await t
      .typeText(signUpEmailInput, email)
      .typeText(signUpPasswordInput, password)
      .typeText(signUpConfirmPasswordInput, password)

    if (!options.skipDisclaimer) {
      await t.click(signUpDisclaimer)
    }

    await t.click(signUpButton)
  },

}
