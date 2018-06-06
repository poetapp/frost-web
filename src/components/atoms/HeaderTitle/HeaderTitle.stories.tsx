import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
// tslint:disable-next-line
import { wInfo } from 'stories/index.stories'
import { HeaderTitle } from './HeaderTitle'

storiesOf('Components/Layout', module).addWithJSX(
  'HeaderTitle',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <HeaderTitle
    readonly children?: JSX.Element
    readonly className?: string
    />
  ~~~`)(() => <HeaderTitle children={text('children', 'test')} className={text('className', '')} />)
)
