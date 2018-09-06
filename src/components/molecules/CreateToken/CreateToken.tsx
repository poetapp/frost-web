import { BoxToken } from 'components/atoms/BoxToken/BoxToken'
import { Button } from 'components/atoms/Button/Button'
import { DeleteToken } from 'components/modals/DeleteToken/DeleteToken'
import { LegendVerifiedAccount } from 'components/molecules/LegendVerifiedAccount/LegendVerifiedAccount'
import { Network } from 'interfaces/Props'

import * as React from 'react'
import './CreateToken.scss'

interface CreateTokenProps {
  readonly boxToken: ReadonlyArray<string>
  readonly showVerifiedAccount: boolean
  readonly sendEmailVarifiedAccount: (event: React.SyntheticEvent) => void
  readonly retryWait: boolean
  readonly onDeleteToken?: () => void
  readonly onCloseModal: () => void
  readonly onShowModal: (apiToken: string) => void
  readonly showDeleteModal: boolean
  readonly disabledButton: boolean
  readonly onCreateApiToken: (event: React.SyntheticEvent) => void
  readonly submitDisabled: boolean
  readonly network: Network
  readonly textCreateTokenButton: string
}

export const CreateToken = (props: CreateTokenProps) => (
  <div className={'CreateToken'}>
    <header className={'CreateToken__header'}>
      <h2 className={'CreateToken__header__title'}>API Tokens</h2>
      <p className={'CreateToken__header__description'}>
        Manage the ways that you authorize requests to the Frost API.
      </p>
    </header>
    <BoxToken apiTokens={props.boxToken} onDeleteToken={props.onShowModal} />
    <LegendVerifiedAccount
      show={!props.showVerifiedAccount}
      onClick={props.sendEmailVarifiedAccount}
      retryWait={props.retryWait}
    />
    <Button
      className={'CreateToken__button'}
      text={props.textCreateTokenButton}
      onClick={props.onCreateApiToken}
      disabled={props.submitDisabled}
    />
    <DeleteToken
      onDeleteToken={props.onDeleteToken}
      show={props.showDeleteModal}
      onClose={props.onCloseModal}
      disabledButton={props.disabledButton}
    />
  </div>
)
