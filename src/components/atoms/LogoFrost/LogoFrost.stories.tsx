import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { LogoFrost } from './LogoFrost'

storiesOf('Components/Logos', module).addWithJSX(
  'LogoFrost',
  wInfo(`

  ### Notes

  This the Frost Logo with Text.

  ### Usage
  ~~~js
  <LogoFrost
    readonly className?: string
    />
  ~~~`)(() => <LogoFrost className={text('className', '')} />)
)
