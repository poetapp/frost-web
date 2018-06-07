import * as React from 'react'

import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { HeaderHome } from './HeaderHome'

storiesOf('Components/Layout', module).addWithJSX(
  'HeaderHome',
  wInfo(`

  ### Notes

  This the home page header.

  ### Usage
  ~~~js
  <HeaderHome
    readonly isLogged?: boolean
  />
  ~~~`)(() => <HeaderHome isLogged={boolean('isLogged', true)} />)
)
