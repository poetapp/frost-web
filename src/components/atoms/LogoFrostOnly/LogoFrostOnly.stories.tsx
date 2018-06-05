import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
// tslint:disable-next-line
import { wInfo } from '../../../stories/index.stories'
import { LogoFrostOnly } from './LogoFrostOnly'

storiesOf('Components/Layout', module).addWithJSX(
  'LogoFrostOnly',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <LogoFrostOnly
    readonly className?: string
    />
  ~~~`)(() => <LogoFrostOnly className={text('className', '')} />)
)
