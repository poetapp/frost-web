import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { LogoFrost } from './LogoFrost'

storiesOf('Components/Layout', module).addWithJSX(
  'LogoFrost',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <LogoFrost
    readonly className?: string
    />
  ~~~`)(() => <LogoFrost className={text('className', '')} />)
)
