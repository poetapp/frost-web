import { pages, SITE } from '../helpers'
import { LoginRegisterPage } from '../page-objects/login-register-page'
import { TokenPage } from '../page-objects/token-page'

fixture `API tokens`
  .page `${SITE}${pages.TOKEN}`

test(`The initial api token list has a single token`, async t => {
  const expected = 1
  const should = `Should have ${expected} api token(s) for a new user`
  await t.navigateTo(`${SITE}${pages.LOGIN}`)
  const { email, password } = await LoginRegisterPage.createUser(t)

  await t
    .useRole(LoginRegisterPage.frostUser(email, password))
    .navigateTo(`${SITE}${pages.TOKEN}`)

  await TokenPage.pageClass()

  // Count the tokens.
  const actual = await TokenPage.apiTokens.count

  await t.expect(actual).eql(expected, should)
})

test(`The 'Get API Key' action adds a new token to the list`, async t => {
  const expected = 2
  const should = `Should have ${expected} api token(s)`
  await t.navigateTo(`${SITE}${pages.LOGIN}`)
  const { email, password } = await LoginRegisterPage.createUser(t)

  await t
    .useRole(LoginRegisterPage.frostUser(email, password))
    .navigateTo(`${SITE}${pages.TOKEN}`)

  await TokenPage.pageClass()

  // Add a new token.
  await t.click(TokenPage.addTokenAction)

  const actual = await TokenPage.apiTokens.count

  await t.expect(actual).eql(expected, should)
})

test(`Only a maximum number of tokens can be added`, async t => {
  const expected = 5
  const should = `Should have ${expected} api token(s)`
  await t.navigateTo(`${SITE}${pages.LOGIN}`)
  const { email, password } = await LoginRegisterPage.createUser(t)

  await t
    .useRole(LoginRegisterPage.frostUser(email, password))
    .navigateTo(`${SITE}${pages.TOKEN}`)

  await TokenPage.pageClass()

  // Try to add one more than the maximum allowed tokens.
  await t.click(TokenPage.addTokenAction)
  await t.click(TokenPage.addTokenAction)
  await t.click(TokenPage.addTokenAction)
  await t.click(TokenPage.addTokenAction)
  await t.click(TokenPage.addTokenAction)

  const actual = await TokenPage.apiTokens.count

  await t.expect(actual).eql(expected, should)
})

test(`The 'Delete' action removes a token from the list`, async t => {
  const expected = 1
  const should = `Should have ${expected} api token(s)`
  await t.navigateTo(`${SITE}${pages.LOGIN}`)
  const { email, password } = await LoginRegisterPage.createUser(t)

  await t
    .useRole(LoginRegisterPage.frostUser(email, password))
    .navigateTo(`${SITE}${pages.TOKEN}`)

  await TokenPage.pageClass()

  // Add a new token, then delete the first token in the list.
  await t.click(TokenPage.addTokenAction)
  await TokenPage.deleteToken(t, 0)

  const actual = await TokenPage.apiTokens.count

  await t.expect(actual).eql(expected, should)
})
