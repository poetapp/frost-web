import { BoxToken } from 'components/atoms/BoxToken/BoxToken'
import { Button } from 'components/atoms/Button/Button'
import { LegendVerifiedAccount } from 'components/molecules/LegendVerifiedAccount/LegendVerifiedAccount'
import { ApiToken } from 'interfaces/Props'
import * as React from 'react'
import './CreateToken.scss'

interface CreateTokenProps {
  boxToken: string[]
  showVerifiedAccount: boolean
  sendEmailVarifiedAccount: (event: Event) => void
  retryWait: boolean
}

export const CreateToken = (props: CreateTokenProps) => (
  <div className={'CreateToken'}>
    <header className={'CreateToken__header'}>
      <h2 className={'CreateToken__header__title'}>API Tokens</h2>
      <p className={'CreateToken__header__description'}>
        Manage the ways that you authorize requests to the Frost API.
      </p>
    </header>
    <BoxToken apiTokens={props.boxToken} />
    <LegendVerifiedAccount
      show={!props.showVerifiedAccount}
      onClick={props.sendEmailVarifiedAccount}
      retryWait={props.retryWait}
    />
    <Button className={'CreateToken__button'} text={'Get API Key'} />
  </div>
)
