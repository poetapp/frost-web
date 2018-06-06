import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { wInfo } from 'stories/index.stories'
import { ChangePassword } from './ChangePassword'

storiesOf('Components/molecules', module).addWithJSX(
  'ChangePassword',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <ChangePassword
    readonly onSubmit: (event: any) => any
    readonly disabledButton?: boolean
    />
  ~~~`)(() => <ChangePassword onSubmit={() => alert('onSubmit')} disabledButton={boolean('disabledButton', false)} />)
)
