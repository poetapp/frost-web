import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { LogoFrostOnly } from './LogoFrostOnly'

storiesOf('Components/Logos', module).addWithJSX(
  'LogoFrostOnly',
  wInfo(`

  ### Notes

  This is the Frost Logo.

  ### Usage
  ~~~js
  <LogoFrostOnly
    readonly className?: string
    />
  ~~~`)(() => <LogoFrostOnly className={text('className', '')} />)
)
