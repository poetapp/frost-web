import * as React from 'react'

import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { SignUp } from './SignUp'

storiesOf('Components/Forms', module).addWithJSX(
  'SignUp',
  wInfo(`

  ### Notes

  This is a sign up form.

  ### Usage
  ~~~js
  <SignUp
    readonly onSubmit: (event: any) => any
    readonly disabledButton?: boolean
    readonly serverErrors?: any
    readonly form?: any
  />
  ~~~`)(() => <SignUp onSubmit={() => alert('onSubmit')} disabledButton={boolean('disabledButton', false)} />)
)
