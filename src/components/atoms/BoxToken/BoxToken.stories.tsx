import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { BoxToken } from './BoxToken'

storiesOf('Components/Layout', module).addWithJSX(
  'BoxToken',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <BoxToken
    readonly apiTokens: ReadonlyArray<string>
    readonly onDeleteToken?: (apiToken: string) => void
  >
  ~~~`)(() => <BoxToken apiTokens={[]} />)
)
