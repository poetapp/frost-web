import * as React from 'react'

import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { ToggleRP } from './ToggleRP'

storiesOf('Components/Layout', module).addWithJSX(
  'ToggleRenderProp',
  wInfo(`

  ### Notes

  This displays a working toggle for Testnet and Mainnet.

  ### Usage
  ~~~js
  <Toggles
    readonly children?: any
    readonly disabled?: boolean
    readonly on?: boolean
    readonly onClick?: () => void
    />
  ~~~`)(() =>
      <ToggleRP />
    )
