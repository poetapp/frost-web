import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
// tslint:disable-next-line
import { wInfo } from 'stories/index.stories'
import { CloseButton } from './CloseButton'

storiesOf('Components/Buttons', module).addWithJSX(
  'CloseButton',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <CloseButton
    readonly onClose: () => void
    readonly className?: string
    />
  ~~~`)(() => <CloseButton className={text('className', '')} onClose={() => alert('closed')} />)
)
