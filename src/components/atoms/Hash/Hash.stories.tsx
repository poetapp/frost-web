import * as React from 'react'

import { text, boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { Hash } from './Hash'

storiesOf('Components/Layout', module).addWithJSX(
  'Hash',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <Hash
    readonly children?: JSX.Element
    readonly textClickable?: boolean
    readonly className?: string
    />
  ~~~`)(() => <Hash textClickable={boolean('textClickable', true)} className={text('className', '')} />)
)
