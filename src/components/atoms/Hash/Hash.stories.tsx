import * as React from 'react'

import { text, boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { Hash } from './Hash'

storiesOf('Components/Text', module).addWithJSX(
  'Hash',
  wInfo(`

  ### Notes

  Uses CopyableText component to copy full text, but only displays first and last 20 characters.

  ### Usage
  ~~~js
  <Hash
    readonly children?: string
    readonly textClickable?: boolean
    readonly className?: string
    />
  ~~~`)(() => <Hash textClickable={boolean('textClickable', true)} className={text('className', '')} />)
)
