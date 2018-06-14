import * as React from 'react'

import { text, boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { Checkbox } from './Checkbox'

storiesOf('Components/Forms', module).addWithJSX(
  'Checkbox',
  wInfo(`

  ### Notes

  This is a checkbox.

  ### Usage
  ~~~js
  <Checkbox
    readonly name: string
    readonly required?: boolean
    readonly children?: any
    />
  ~~~`)(() => (
    <Checkbox name={text('name', 'Test')} required={boolean('required', false)}>
      <div>Test</div>
    </Checkbox>
  ))
)
