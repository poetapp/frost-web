import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { Label } from './Label'

storiesOf('Components/Forms', module).addWithJSX(
  'Label',
  wInfo(`

  ### Notes

  This adds a label to it's children.

  ### Usage
  ~~~js
  <Label
    readonly children?: any
    readonly text?: any
  />
  ~~~`)(() => (
    <Label text={text('text', 'label')}>
      <div>Test Div</div>
    </Label>
  ))
)
