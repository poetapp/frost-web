import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { HeaderTitle } from './HeaderTitle'

storiesOf('Components/Layout', module).addWithJSX(
  'HeaderTitle',
  wInfo(`

  ### Notes

  Wraps children in h1 tag.

  ### Usage
  ~~~js
  <HeaderTitle
    readonly children?: any
    readonly className?: string
    />
  ~~~`)(() => <HeaderTitle children={text('children', 'test')} className={text('className', '')} />)
)
