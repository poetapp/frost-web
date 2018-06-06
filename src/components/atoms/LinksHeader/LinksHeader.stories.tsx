import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { wInfo } from 'stories/index.stories'
import { LinksHeader } from './LinksHeader'

storiesOf('Components/Layout', module).addWithJSX(
  'LinksHeader',
  wInfo(`

  ### Notes

  Documentation/API/Forum links in white.

  ### Usage
  ~~~js
  <LinksHeader />
  ~~~`)(() => <LinksHeader />)
)
