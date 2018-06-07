import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { PanelOptions } from './PanelOptions'

storiesOf('Components/Forms', module).addWithJSX(
  'PanelOptions',
  wInfo(`

  ### Notes

  This displays the 2 panels for the dashboard home page.

  ### Usage
  ~~~js
  <PanelOptions />
  ~~~`)(() => <PanelOptions />)
)
