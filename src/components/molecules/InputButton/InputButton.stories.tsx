import * as React from 'react'

import { boolean, select, text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { InputButton } from './InputButton'

storiesOf('Components/Forms', module).addWithJSX(
  'InputButton',
  wInfo(`

  ### Notes

  This is an input with a button.

  ### Usage
  ~~~js
  <InputButton
    readonly name: string
    readonly type: string
    readonly placeholder?: string
    readonly required?: boolean
    readonly textButton?: string
    readonly onSubmit?: (event: any) => booleann
  />
  ~~~`)(() => (
    <InputButton
      name={text('name', 'text')}
      type={select(
        'type',
        {
          password: 'password',
          button: 'button',
          checkbox: 'checkbox',
          color: 'color',
          date: 'date',
          email: 'email',
          file: 'file',
          hidden: 'hidden',
          image: 'image',
          month: 'month',
          number: 'number',
          radio: 'radio',
          range: 'range',
          reset: 'reset',
          search: 'search',
          submit: 'submit',
          tel: 'tel',
        },
        'tel'
      )}
      placeholder={text('placeholder', 'text')}
      required={boolean('required', false)}
      textButton={text('textButton', 'Text')}
      onSubmit={() => alert('onSubmit')}
    />
  ))
)
