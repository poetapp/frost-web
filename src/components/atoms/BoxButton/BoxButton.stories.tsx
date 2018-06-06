import * as React from 'react'

import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { Images } from 'images/Images'
import { wInfo } from 'stories/index.stories'
import { BoxButton } from './BoxButton'

storiesOf('Components/Layout', module).addWithJSX(
  'BoxButton',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <BoxButton
    readonly title?: string
    readonly description?: string
    readonly buttonText?: string
    readonly image: string
    readonly className: string
  >
  ~~~`)(() => (
    <BoxButton
      title={text('Title', 'Title')}
      description={text(
        'Description',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      )}
      buttonText={text('Button Text', 'Button')}
      image={text('Image', Images.FrostLogoOnly)}
      className={text('ClassName', '')}
    />
  ))
)
