import * as React from 'react'

import * as dom from 'cheerio'
import * as ReactDOMServer from 'react-dom/server'
import { describe } from 'riteway'

import { ToggleMainnet } from './ToggleMainnet'

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
      actual: $('.ToggleText').text(),
      expected: 'MainnetTestnet',
    })
  }
})
