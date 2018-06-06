import * as React from 'react'

import { text, boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { CopyableText } from './CopyableText'

storiesOf('Components/Text', module).addWithJSX(
  'CopyableText',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <CopyableText
    readonly text: string
    readonly textClickable?: boolean
    readonly className?: string
    />
  ~~~`)(() => (
    <CopyableText
      text={text('text', 'example text')}
      textClickable={boolean('textClickable', true)}
      className={text('className', '')}
    />
  ))
)
