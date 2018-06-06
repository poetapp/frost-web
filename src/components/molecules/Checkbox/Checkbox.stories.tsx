import { text, boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { wInfo } from 'stories/index.stories'
import { Checkbox } from './Checkbox'

storiesOf('Components/Layout', module).addWithJSX(
  'Checkbox',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <Checkbox
    readonly name: string
    readonly required?: boolean
    readonly children?: JSX.Element
    />
  ~~~`)(() => (
    <Checkbox name={text('name', 'Test')} required={boolean('required', false)}>
      <div>Test</div>
    </Checkbox>
  ))
)
