import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { Logout } from './Logout'

storiesOf('Components/Buttons', module).addWithJSX(
  'Logout',
  wInfo(`

  ### Notes

  This is a logout button.

  ### Usage
  ~~~js
  <Logout
    readonly email?: string
    readonly onLogout?: () => void
    readonly className?: string
    />
  ~~~`)(() => (
    <Logout
      className={text('className', '')}
      onLogout={() => alert('logged out')}
      email={text('email', 'test@email.com')}
    />
  ))
)
