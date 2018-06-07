import * as React from 'react'
import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { SignIn } from './SignIn'

storiesOf('Components/Forms', module).addWithJSX(
  'SignIn',
  wInfo(`

  ### Notes

  This is a form for signing in.

  ### Usage
  ~~~js
  <SignIn
    readonly onSubmit: (event: any) => any
    readonly disabledButton?: boolean
    readonly serverErrors?: any
    />
  ~~~`)(() => <SignIn onSubmit={() => alert('onSubmit')} disabledButton={boolean('disabledButton', false)} />)
)
