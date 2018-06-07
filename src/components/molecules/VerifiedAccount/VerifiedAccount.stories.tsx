import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { VerifiedAccount } from './VerifiedAccount'

storiesOf('Components/Forms', module).addWithJSX(
  'VerifiedAccount',
  wInfo(`

  ### Notes

  This displays Frost logo and description.

  ### Usage
  ~~~js
  <VerifiedAccount />
  ~~~`)(() => <VerifiedAccount />)
)
