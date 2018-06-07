import * as React from 'react'
import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { TextDisclaimer } from './TextDisclaimer'

storiesOf('Components/Text', module).addWithJSX(
  'TextDisclaimer',
  wInfo(`

  ### Notes

  This is the text disclaimer for frost-web.

  ### Usage
  ~~~js
  <TextDisclaimer
    readonly className?: string
    />
  ~~~`)(() => <TextDisclaimer className={text('className', '')} />)
)
