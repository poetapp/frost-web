import { BoxToken } from 'components/atoms/BoxToken/BoxToken'
import { Button } from 'components/atoms/Button/Button'
import 'components/molecules/CreateToken/CreateToken.scss'
import { LegendVerifiedAccount } from 'components/molecules/LegendVerifiedAccount/LegendVerifiedAccount'
import * as moment from 'moment'
import * as React from 'react'

interface CreateTokenProps {
  boxToken: { apiToken: string; dateCreated: string }
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
    <BoxToken
      apiToken={props.boxToken.apiToken}
      dateCreated={moment(parseInt(props.boxToken.dateCreated, 10)).format(
        'MM/DD/YYYY'
      )}
    />
    <LegendVerifiedAccount
      show={!props.showVerifiedAccount}
      onClick={props.sendEmailVarifiedAccount}
      retryWait={props.retryWait}
    />
    <Button className={'CreateToken__button'} text={'Get API Key'} />
  </div>
)
