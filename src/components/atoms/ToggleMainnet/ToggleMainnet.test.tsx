import * as React from 'react'

import * as dom from 'cheerio'
import * as ReactDOMServer from 'react-dom/server'
import { describe } from 'riteway'

import { ToggleMainnet, isNetworkLive } from './ToggleMainnet'

const render = ReactDOMServer.renderToStaticMarkup

describe('<ToggleMainnet>{...children}</ToggleMainnet>', async (assert: any) => {
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

describe('isNetworkLive()', async (assert: any) => {
  {
    const actual = isNetworkLive(true)
    const expected = 'live'

    assert({
      given: 'enabledMainnet true',
      should: 'return live',
      actual,
      expected,
    })
  }

  {
    const actual = isNetworkLive(false)
    const expected = 'test'

    assert({
      given: 'enabledMainnet true',
      should: 'return test',
      actual,
      expected,
    })
  }
})
