import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { CloseButton } from './CloseButton'

storiesOf('Components/Buttons', module).addWithJSX(
  'CloseButton',
  wInfo(`

  ### Notes

  This is a small x positioned in the top right corner of it's container for closing the container. 

  ### Usage
  ~~~js
  <CloseButton
    readonly onClose: () => void
    readonly className?: string
    />
  ~~~`)(() => <CloseButton className={text('className', '')} onClose={() => alert('closed')} />)
)
