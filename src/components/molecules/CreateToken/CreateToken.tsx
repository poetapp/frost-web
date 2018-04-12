import { BoxToken } from 'components/atoms/BoxToken/BoxToken'
import { Button } from 'components/atoms/Button/Button'
import { ModalDeleteToken } from 'components/atoms/ModalDeleteToken/ModalDeleteToken'
import { LegendVerifiedAccount } from 'components/molecules/LegendVerifiedAccount/LegendVerifiedAccount'
import * as React from 'react'
import './CreateToken.scss'

interface CreateTokenProps {
  readonly boxToken: ReadonlyArray<string>
  readonly showVerifiedAccount: boolean
  readonly sendEmailVarifiedAccount: (event: Event) => void
  readonly retryWait: boolean
  readonly onDeleteToken?: () => void
  readonly onCloseModal: () => void
  readonly showDeleteModal: boolean
}

export const CreateToken = (props: CreateTokenProps) => (
  <div className={'CreateToken'}>
    <header className={'CreateToken__header'}>
      <h2 className={'CreateToken__header__title'}>API Tokens</h2>
      <p className={'CreateToken__header__description'}>
        Manage the ways that you authorize requests to the Frost API.
      </p>
    </header>
    <BoxToken apiTokens={props.boxToken} onDeleteToken={props.onDeleteToken} />
    <LegendVerifiedAccount
      show={!props.showVerifiedAccount}
      onClick={props.sendEmailVarifiedAccount}
      retryWait={props.retryWait}
    />
    <Button className={'CreateToken__button'} text={'Get API Key'} />
    <ModalDeleteToken
      onDeleteToken={() => null}
      show={props.showDeleteModal}
      onClose={props.onCloseModal}
    />
  </div>
)
