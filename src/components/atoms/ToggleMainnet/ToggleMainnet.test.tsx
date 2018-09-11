import * as React from 'react'

import * as dom from 'cheerio'
import * as ReactDOMServer from 'react-dom/server'
import { describe } from 'riteway'

import { ToggleMainnet, isNetworkMainnet } from './ToggleMainnet'

const render = ReactDOMServer.renderToStaticMarkup

describe('<ToggleMainnet>{...children}</ToggleMainnet>', async (should: any) => {
  const { assert } = should('')

  {
    const $ = dom.load(render(<ToggleMainnet />))
    assert({
      given: 'no props and no children',
      should: 'render a Toggle',
      actual: $('.ToggleMainnet').length,
      expected: 1,
    })
  }

  {
    const $ = dom.load(render(<ToggleMainnet />))
    assert({
      given: 'no props and no children',
      should: 'render a Toggle surrounded by the correct text',
      actual: $('.ToggleMainnet__toggle-text').text(),
      expected: 'TestnetMainnet',
    })
  }
})

describe('isNetworkMainnet()', async (should: any) => {
  const { assert } = should('')

  {
    const actual = isNetworkMainnet(true)
    const expected = 'mainnet'

    assert({
      given: 'enabledMainnet true',
      should: 'return mainnet',
      actual,
      expected,
    })
  }

  {
    const actual = isNetworkMainnet(false)
    const expected = 'testnet'

    assert({
      given: 'enabledMainnet true',
      should: 'return testnet',
      actual,
      expected,
    })
  }
})
