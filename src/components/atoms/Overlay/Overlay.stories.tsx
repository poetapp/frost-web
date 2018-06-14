import * as React from 'react'

import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { Overlay } from './Overlay'

storiesOf('Components/Layout', module).addWithJSX(
  'Overlay',
  wInfo(`

  ### Notes

  This overlay's the screen with an opaque background.

  ### Usage
  ~~~js
  <Overlay
    readonly children?: any
    readonly show: boolean
    />
  ~~~`)(() => (
    <Overlay show={boolean('show', true)}>
      <div>Test Element</div>
    </Overlay>
  ))
)
