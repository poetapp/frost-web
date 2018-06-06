import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { LogoPoetWhite } from './LogoPoetWhite'

storiesOf('Components/Layout', module).addWithJSX(
  'LogoPoetWhite',
  wInfo(`

  ### Notes

  This is the Poet Logo in white.

  ### Usage
  ~~~js
  <LogoPoetWhite
    readonly className?: string
    />
  ~~~`)(() => <LogoPoetWhite className={text('className', '')} />)
)
