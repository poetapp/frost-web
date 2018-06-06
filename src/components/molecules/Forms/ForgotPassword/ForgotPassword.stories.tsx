import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { wInfo } from 'stories/index.stories'
import { ForgotPassword } from './ForgotPassword'

storiesOf('Components/molecules', module).addWithJSX(
  'ForgotPassword',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <ForgotPassword
    readonly onSubmit: (event: any) => any
    />
  ~~~`)(() => <ForgotPassword onSubmit={() => alert('onSubmit')} />)
)
