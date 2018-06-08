import * as React from 'react'

import { boolean, text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { Form } from './Form'

storiesOf('Components/Forms', module).addWithJSX(
  'Form',
  wInfo(`

  ### Notes

  This is form container.

  ### Usage
  ~~~js
  <Form
    readonly legend: string
    readonly children?: JSX.Element
    readonly textButton: string
    readonly onValidate?: (data: any, elements: any) => boolean
    readonly onSubmit?: (event: any, elements: any) => any
    readonly disabledButton?: boolean
    readonly formRef?: any
    />
  ~~~`)(() => (
    <Form
      legend={text('legend', 'Form')}
      textButton={text('textButton', 'Test')}
      disabledButton={boolean('disabledButton', false)}
    >
      <input />
    </Form>
  ))
)
