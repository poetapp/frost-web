import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { BoxSimple } from './BoxSimple'

storiesOf('Components/Layout', module).addWithJSX(
  'BoxSimple',
  wInfo(`

  ### Notes

  This component displays title and description. A header can also be included and can be anything(text, images, elements, etc.)

  ### Usage
  ~~~js
  <BoxSimple
    readonly title?: string
    readonly description?: string
    readonly header?: any
    readonly className?: string
  >
  ~~~`)(() => (
    <BoxSimple
      title={text('Title', 'Title')}
      description={text(
        'Description',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      )}
      header={text('Header', 'This is typically an image')}
      className={text('ClassName', '')}
    />
  ))
)
