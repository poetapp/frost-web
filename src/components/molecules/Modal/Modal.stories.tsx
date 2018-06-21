import * as React from 'react'

import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { wInfo } from 'stories/index.stories'
import { Modal } from './Modal'

storiesOf('Components/Forms', module).addWithJSX(
  'Modal',
  wInfo(`

  ### Notes

  This is a modal that displays over the page.

  ### Usage
  ~~~js
  <Modal
    readonly onClose: () => void
    readonly children?: React.ReactNode
    readonly show: boolean
  />
  ~~~`)(() => (
    <Modal onClose={() => alert('onClose')} show={boolean('show', true)}>
      <div>
        Nescius quid duis proident aliqua. In legam senserit. Doctrina id quem ex nostrud est legam cernantur. Est de
        enim quorum multos.Incididunt dolor pariatur, multos ad voluptate. Quis ingeniis a appellat, eiusmod est esse
        ingeniis.
      </div>
    </Modal>
  ))
)
