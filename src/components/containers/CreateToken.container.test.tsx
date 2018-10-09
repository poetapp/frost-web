import { Network } from 'interfaces/Props'
import { describe } from 'riteway'
import { capitalize, getTextButtonByNetwork, getTextButton } from './CreateToken.container'

describe('CreateToken container capitalize()', async (assert: any) => {
  {
    const actual = capitalize('hello')
    const expected = 'Hello'

    assert({
      given: 'a text',
      should: 'be capitalized',
      actual,
      expected,
    })
  }
})

describe('CreateToken container getTextButtonByNetwork()', async (assert: any) => {
  {
    const actual = getTextButtonByNetwork(Network.MAINNET)
    const expected = 'Create API Token for Mainnet'

    assert({
      given: `a network: ${Network.MAINNET}`,
      should: `return Create API Token for ${Network.MAINNET}`,
      actual,
      expected,
    })
  }
})

describe('CreateToken container getTextButton()', async (assert: any) => {
  {
    const actual = getTextButton()
    const expected = 'Create API Token'

    assert({
      given: 'getTextButton()',
      should: `return 'Create API Token'`,
      actual,
      expected,
    })
  }
})
