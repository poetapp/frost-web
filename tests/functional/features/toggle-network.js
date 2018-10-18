import jwt from 'jsonwebtoken'
import { pages, SITE } from '../helpers'
import { LoginRegisterPage } from '../page-objects/login-register-page'
import { TokenPage } from '../page-objects/token-page'

const featureToggle = '/?ft=toggle-network'

fixture `Toggle Network`
  .page `${SITE}${pages.TOKEN}`


test(`The toggle Network should be in Testnet by default`, async t => {
  const expected = false
  const should = `Should be ${expected} by default`
  await t.navigateTo(`${SITE}${pages.LOGIN}`)
  const { email, password } = await LoginRegisterPage.createUser(t)

  await t
    .useRole(LoginRegisterPage.frostUser(email, password))
    .navigateTo(`${SITE}${pages.TOKEN}${featureToggle}`)

  await TokenPage.pageClass()
  const actual = await TokenPage.toggleNetwork.find('input').checked

  await t.expect(actual).eql(expected, should)
})

test(`The Api token should have the property network test when the toggle is on testnet`, async t => {
  const expected = 'test'
  const should = `Should have the property ${expected}`
  await t.navigateTo(`${SITE}${pages.LOGIN}`)
  const { email, password } = await LoginRegisterPage.createUser(t)

  await t
    .useRole(LoginRegisterPage.frostUser(email, password))
    .navigateTo(`${SITE}${pages.TOKEN}${featureToggle}`)

  await TokenPage.pageClass()

  const inputs = await TokenPage.apiTokens.find('input')

  const value = await inputs.nth(0).value
  const token = value.replace('TEST_', '')
  const actual = jwt.decode(token).network
  await t.expect(actual).eql(expected, should)
})

test(`Api tokens mainnet list is empty by default when the toggle is on mainnet`, async t => {
  const expected = 0
  const should = `Should be ${expected} the Api Tokens for Mainnet by default`
  await t.navigateTo(`${SITE}${pages.LOGIN}`)
  const { email, password } = await LoginRegisterPage.createUser(t)

  await t
    .useRole(LoginRegisterPage.frostUser(email, password))
    .navigateTo(`${SITE}${pages.TOKEN}${featureToggle}`)

  await TokenPage.pageClass()

  await t.click(TokenPage.toggleNetwork)

  const inputs = await TokenPage.apiTokens.find('input')
  const actual = await inputs.count

  await t.expect(actual).eql(expected, should)
})

test(`Add a token with live network as property with Mainnet toggle enabled`, async t => {
  const expected = 'live'
  const should = `Should have the property ${expected}`
  await t.navigateTo(`${SITE}${pages.LOGIN}`)
  const { email, password } = await LoginRegisterPage.createUser(t)

  await t
    .useRole(LoginRegisterPage.frostUser(email, password))
    .navigateTo(`${SITE}${pages.TOKEN}${featureToggle}`)

  await TokenPage.pageClass()

  await t.click(TokenPage.toggleNetwork)
  await t.click(TokenPage.addTokenAction)

  const inputs = await TokenPage.apiTokens.find('input')

  const token = await inputs.nth(0).value
  const actual = jwt.decode(token).network
  await t.expect(actual).eql(expected, should)
})