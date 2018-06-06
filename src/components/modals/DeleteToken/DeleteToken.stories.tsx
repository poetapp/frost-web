import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { wInfo } from 'stories/index.stories'
import { DeleteToken } from './DeleteToken'

storiesOf('Components/Modal', module).addWithJSX(
  'DeleteToken',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <DeleteToken
    readonly onDeleteToken: (event: Event) => void
    readonly show: boolean
    readonly onClose: () => void
    readonly disabledButton: boolean
    />
  ~~~`)(() => (
    <DeleteToken
      onDeleteToken={() => alert('onDeleteToken')}
      show={boolean('show', true)}
      onClose={() => alert('onClose')}
      disabledButton={boolean('disabledButton', false)}
    />
  ))
)
