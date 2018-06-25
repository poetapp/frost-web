import * as React from 'react'

import * as dom from 'cheerio'
import * as ReactDOMServer from 'react-dom/server'
import { describe } from 'riteway'

import { ToggleRP } from './ToggleRP'

const render = ReactDOMServer.renderToStaticMarkup

describe('<ToggleRP>{...children}</ToggleRP>', async (should: any) => {
  const { assert } = should('')

  {
    const $ = dom.load(render(<ToggleRP />))
    assert({
      given: 'no props and no children',
      should: 'render a toggle',
      actual: $('#test-id-input').length,
      expected: 1,
    })
  }

  {
    const $ = dom.load(render(<ToggleRP />))
    assert({
      given: 'no props and no children',
      should: 'render an un-checked toggle',
      actual: $('#test-id-input').prop('checked'),
      expected: false,
    })
  }

  {
    const $ = dom.load(render(<ToggleRP on={true} />))
    assert({
      given: 'on as true and no children',
      should: 'render a checked toggle',
      actual: $('#test-id-input').prop('checked'),
      expected: true,
    })
  }

  {
    const $ = dom.load(render(<ToggleRP className={'test'} />))
    assert({
      given: 'className as props',
      should: 'render an unchecked toggle with the className',
      actual: $('.test').prop('checked'),
      expected: false,
    })
  }

  {
    const $ = dom.load(render(<ToggleRP>{() => <button className={'test'} />}</ToggleRP>))
    assert({
      given: 'a button as children',
      should: 'render the button',
      actual: $('.test').length,
      expected: 1,
    })
  }
  {
    const $ = dom.load(
      render(
        <ToggleRP>
          {({ on }: { readonly on: boolean }) => <button className={'test'}>{on ? 'ON' : 'NOT ON'}</button>}
        </ToggleRP>
      )
    )
    assert({
      given: 'a button as children',
      should: 'render the button with on being false',
      actual: $('.test').text(),
      expected: 'NOT ON',
    })
  }
  {
    const $ = dom.load(
      render(
        <ToggleRP>
          {({ toggle, getToggleProps }: { readonly toggle: any; readonly getToggleProps: any }) => (
            <div className={'test'}>{toggle && getToggleProps ? 'ON' : 'NOT ON'}</div>
          )}
        </ToggleRP>
      )
    )
    assert({
      given: 'a button as children',
      should: 'have access to toggle and getToggleProps',
      actual: $('.test').text(),
      expected: 'ON',
    })
  }
})
