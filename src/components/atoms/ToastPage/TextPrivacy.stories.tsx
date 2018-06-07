import * as React from 'react'
import { text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { ToastPage } from './ToastPage'

storiesOf('Components/Layout', module).addWithJSX(
  'ToastPage',
  wInfo(`

  ### Notes

  This allows for toast messages.

  ### Usage
  ~~~js
  <ToastPage
    readonly className?: string
    readonly children?: JSX.Element
    />
  ~~~`)(() => (
    <ToastPage className={text('className', '')}>
      <button onClick={(() =>
        toast(({ closeToast }) =>
        <div>Functional toast 😎</div>)}>Test</button>
    </ToastPage>
  ))
)
