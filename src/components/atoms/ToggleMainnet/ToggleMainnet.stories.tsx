import * as React from 'react'

import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { ToggleMainnet } from './ToggleMainnet'

storiesOf('Components/Layout', module).addWithJSX(
  'ToggleMainnet',
  wInfo(`

  ### Notes

  This displays a working toggle for Testnet and Mainnet.

  ### Usage
  ~~~js
  <Toggles
    readonly className?: string
    />
  ~~~`)(() =>
    <ToggleMainnet disabled={boolean('disabled', false)}/>
    )
  )
