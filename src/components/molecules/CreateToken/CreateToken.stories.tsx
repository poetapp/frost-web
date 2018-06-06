import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { wInfo } from 'stories/index.stories'
import { CreateToken } from './CreateToken'

storiesOf('Components/molecules', module).addWithJSX(
  'CreateToken',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <CreateToken
    readonly boxToken: ReadonlyArray<string>
    readonly showVerifiedAccount: boolean
    readonly sendEmailVarifiedAccount: (event: Event) => void
    readonly retryWait: boolean
    readonly onDeleteToken?: () => void
    readonly onCloseModal: () => void
    readonly onShowModal: (apiToken: string) => void
    readonly showDeleteModal: boolean
    readonly disabledButton: boolean
    readonly onCreateApiToken: (event: Event) => void
    readonly submitDisabled: boolean
    />
  ~~~`)(() => (
    <CreateToken
      boxToken={[]}
      showVerifiedAccount={boolean('showVerifiedAccount', false)}
      retryWait={boolean('retryWait', false)}
      onDeleteToken={() => alert('onDeleteToken')}
      onCloseModal={() => alert('onCloseModal')}
      onShowModal={() => alert(apiToken)}
      showDeleteModal={boolean('showDeleteModal', false)}
      disableButton={boolean('disableButton', false)}
      onCreateApiToken={() => alert('onCreateApiToken')}
      submitDisabled={boolean('submitDisabled', false)}
    />
  ))
)
