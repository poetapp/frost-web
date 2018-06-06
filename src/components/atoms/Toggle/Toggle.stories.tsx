import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { wInfo } from 'stories/index.stories'
import { Toggle } from './Toggle'

storiesOf('Components/Layout', module).addWithJSX(
  'Toggle',
  wInfo(`

  ### Notes

  This displays a non-working toggle for Testnet and Livenet with a message about timestamping only to testnet.

  ### Usage
  ~~~js
  <Toggle
    readonly className?: string
    />
  ~~~`)(() => <Toggle className={text('className', '')} />)
)
