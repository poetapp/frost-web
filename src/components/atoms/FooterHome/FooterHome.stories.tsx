import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { FooterHome } from './FooterHome'

storiesOf('Components/Layout', module).addWithJSX(
  'FooterHome',
  wInfo(`

  ### Notes

  This is the footer for frost-web.

  ### Usage
  ~~~js
  <FooterHome
    readonly className?: string
    />
  ~~~`)(() => <FooterHome className={text('className', '')} />)
)
