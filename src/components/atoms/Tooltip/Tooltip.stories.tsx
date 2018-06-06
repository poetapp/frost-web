import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { wInfo } from 'stories/index.stories'
import { Tootip } from './Tooltip'

storiesOf('Components/Layout', module).addWithJSX(
  'Tooltip',
  wInfo(`

  ### Notes

  This is displays anything with an optional text popup on hover.

  ### Usage
  ~~~js
  <Tootip
    readonly element?: any
    readonly tooltipText?: string
    />
  ~~~`)(() => (
    <Tootip
      className={text('className', '')}
      element={<button>Any Element</button>}
      tooltipText={text('tooltipText', 'test')}
    />
  ))
)
