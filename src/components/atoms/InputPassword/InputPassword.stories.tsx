import * as React from 'react'

import { text, boolean, number, select } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
// tslint:disable-next-line
import { wInfo } from '../../../stories/index.stories'
import { InputPassword } from './InputPassword'

storiesOf('Components/Text', module).addWithJSX(
  'InputPassword',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <InputPassword
  readonly name: string
  readonly type: string
  readonly placeholder?: string
  readonly required?: boolean
  readonly minLength?: number
  readonly maxLength?: number
  readonly onChange?: (event: any) => void
  readonly complexity?: {
    readonly lowerCase: number
    readonly upperCase: number
    readonly numeric: number
    readonly symbol: number
  }
  readonly inputRef?: any
    />
  ~~~`)(() => (
    <InputPassword
      name={text('name', 'Name')}
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
        'password'
      )}
      placeholder={text('placeholder', 'Placeholder')}
      required={boolean('required', true)}
      minLength={number('minLength', 10)}
      maxLength={number('maxLength', 20)}
      autoFocus={boolean('autoFocus', true)}
    />
  ))
)
