import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { wInfo } from 'stories/index.stories'
import { SignIn } from './SignIn'

storiesOf('Components/molecules', module).addWithJSX(
  'SignIn',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <SignIn
    readonly onSubmit: (event: any) => any
    readonly disabledButton?: boolean
    readonly serverErrors?: any
    />
  ~~~`)(() => <SignIn onSubmit={() => alert('onSubmit')} disabledButton={boolean('disabledButton', false)} />)
)
