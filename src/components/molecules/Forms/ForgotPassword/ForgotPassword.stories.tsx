import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { ForgotPassword } from './ForgotPassword'

storiesOf('Components/Forms', module).addWithJSX(
  'ForgotPassword',
  wInfo(`

  ### Notes

  This is a form for forgotten passwords.

  ### Usage
  ~~~js
  <ForgotPassword
    readonly onSubmit: (event: any) => any
    />
  ~~~`)(() => <ForgotPassword onSubmit={() => alert('onSubmit')} />)
)
