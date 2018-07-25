import { Selector } from 'testcafe'

const SIGN_UP_FORM = '.RegisterLogin_signUp'

const pageClass = Selector(`.RegisterLogin`)
const signUpEmailInput = Selector(`${SIGN_UP_FORM} input[name="email"]`)
const signUpPasswordInput = Selector(`${SIGN_UP_FORM} input[name="password"]`)
const signUpConfirmPasswordInput = Selector(`${SIGN_UP_FORM} input[name="confirmPassword"]`)
const signUpDisclaimer = Selector(`${SIGN_UP_FORM} input[name="testnet"]`)
const signUpButton = Selector(`${SIGN_UP_FORM} .submit-button button`)

export const LoginRegisterPage = {
  pageClass,

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
