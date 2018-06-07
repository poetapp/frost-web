import * as React from 'react'

import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { LegendVerifiedAccount } from './LegendVerifiedAccount'

storiesOf('Components/Forms', module).addWithJSX(
  'LegendVerifiedAccount',
  wInfo(`

  ### Notes

  This is a legend that displays if an account needs verified.

  ### Usage
  ~~~js
  <LegendVerifiedAccount
    readonly show?: boolean
    readonly onClick?: (event: Event) => void
    readonly retryWait?: boolean
  />
  ~~~`)(() => (
    <LegendVerifiedAccount
      show={boolean('show', true)}
      onClick={() => alert('onClick')}
      retryWait={boolean('retryWait', false)}
    />
  ))
)
