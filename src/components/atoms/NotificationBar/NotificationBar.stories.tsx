import * as React from 'react'

import { text, select } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { NotificationBar } from './NotificationBar'

storiesOf('Components/Layout', module).addWithJSX(
  'NotificationBar',
  wInfo(`

  ### Notes

  This is a notifaction bar that displays in green for a success.

  ### Usage
  ~~~js
  <NotificationBar
    readonly children?: any
    readonly type?: 'success' | 'fail'
    readonly action?: 'fade-in' | 'fade-out' | 'hide'
    />
  ~~~`)(() => (
    <NotificationBar
      className={text('className', '')}
      type={select('type', { success: 'success', fail: 'fail' }, 'success')}
    >
      <div>Test</div>
    </NotificationBar>
  ))
)
