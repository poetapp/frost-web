import * as React from 'react'

import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { ToggleMainnet } from './ToggleMainnet'
import './ToggleMainnet.scss'

storiesOf('Components/Layout', module).addWithJSX(
  'ToggleMainnet',
  wInfo(`

  ### Notes

  This displays a working toggle for Testnet and Mainnet.

  ### Usage
  ~~~js
  <Toggles
    readonly className?: string
    readonly disabled?: boolean
    />
  ~~~`)(() => 
  <ToggleMainnet disabled={boolean('disabled', false)}/>
    )
  )
