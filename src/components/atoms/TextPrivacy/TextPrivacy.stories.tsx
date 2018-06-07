import * as React from 'react'
import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { TextPrivacy } from './TextPrivacy'

storiesOf('Components/Text', module).addWithJSX(
  'TextPrivacy',
  wInfo(`

  ### Notes

  This is the privacy text disclaimer for frost-web.

  ### Usage
  ~~~js
  <TextPrivacy
    readonly className?: string
    />
  ~~~`)(() => <TextPrivacy className={text('className', '')} />)
)
