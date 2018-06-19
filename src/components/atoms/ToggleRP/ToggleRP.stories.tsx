import * as React from 'react'

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
    readonly className?: string
    raadonly disabled?: boolean
    readonly children?: any
    readonly labelledby?: string
    readonly onClick: () => void
    />
  ~~~`)(() =>
      <ToggleRP />
    )
