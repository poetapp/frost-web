import * as React from 'react'
import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { ChangePassword } from './ChangePassword'

storiesOf('Components/Forms', module).addWithJSX(
  'ChangePassword',
  wInfo(`

  ### Notes

  This is a form for changing password.

  ### Usage
  ~~~js
  <ChangePassword
    readonly onSubmit: (event: any) => any
    readonly disabledButton?: boolean
    />
  ~~~`)(() => <ChangePassword onSubmit={() => alert('onSubmit')} disabledButton={boolean('disabledButton', false)} />)
)
