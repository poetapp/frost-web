import { Selector } from 'testcafe'

const PAGE_CLASS = '.RegisterLogin'
const SIGN_UP_FORM = `${PAGE_CLASS}_signUp`
const SIGN_IN_FORM = `${PAGE_CLASS}__signIn`

const pageClass = Selector(PAGE_CLASS)
const signUpEmailInput = Selector(`${SIGN_UP_FORM} input[name="email"]`)
const signUpPasswordInput = Selector(`${SIGN_UP_FORM} input[name="password"]`)
const signUpConfirmPasswordInput = Selector(`${SIGN_UP_FORM} input[name="confirmPassword"]`)
const signUpDisclaimer = Selector(`${SIGN_UP_FORM} input[name="testnet"]`)
const signUpButton = Selector(`${SIGN_UP_FORM} .submit-button button`)

const loginEmailInput = Selector(`${SIGN_IN_FORM} input[name="email"]`)
const loginPasswordInput = Selector(`${SIGN_IN_FORM} input[name="password"]`)
const loginButton = Selector(`${SIGN_IN_FORM} .submit-button button`)

const signUp = async (t, email, password, options = { skipDisclaimer: false }) => {
  await t
    .typeText(signUpEmailInput, email)
    .typeText(signUpPasswordInput, password)
    .typeText(signUpConfirmPasswordInput, password)

  if (!options.skipDisclaimer) {
    await t.click(signUpDisclaimer)
  }

  await t.click(signUpButton)
}

const login = async (t, email, password, options = { skipDisclaimer: false }) =>
  await t
    .typeText(loginEmailInput, email)
    .typeText(loginPasswordInput, password)
    .click(loginButton)

export const LoginRegisterPage = {
  pageClass,
  login,
  signUp,
}
