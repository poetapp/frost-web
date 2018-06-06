import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { wInfo } from 'stories/index.stories'
import { Toggle } from './Toggle'

storiesOf('Components/Layout', module).addWithJSX(
  'Toggle',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <Toggle
    readonly className?: string
    />
  ~~~`)(() => <Toggle className={text('className', '')} />)
)
