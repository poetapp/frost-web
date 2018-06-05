import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
// tslint:disable-next-line
import { wInfo } from '../../../stories/index.stories'
import { NavigationList } from './NavigationList'

storiesOf('Components/Layout', module).addWithJSX(
  'NavigationList',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  interface Linked {
    readonly label: string
    readonly link: string
    readonly external?: boolean
  }

  <NavigationList
    readonly links?: ReadonlyArray<Linked>
    readonly pathActive: string
    readonly className?: string
    />
  ~~~`)(() => (
    <NavigationList
      className={text('className', '')}
      links={[
        { label: 'link1', link: '#', external: true },
        { label: 'link2', link: '#', external: true },
        { label: 'link3', link: '#', external: false },
      ]}
      pathActive={'link1'}
    />
  ))
)
