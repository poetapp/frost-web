import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
// tslint:disable-next-line
import { wInfo } from '../../../stories/index.stories'
import { FooterHome } from './FooterHome'

storiesOf('Components/Layout', module).addWithJSX(
  'FooterHome',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <FooterHome
    readonly className?: string
    />
  ~~~`)(() => <FooterHome className={text('className', '')} />)
)
