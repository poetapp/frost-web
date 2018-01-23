import * as React from 'react'
import { BoxToken } from '../../atoms/BoxToken/BoxToken'
import { Button } from '../../atoms/Button/Button'
import * as moment from 'moment'
import './CreateToken.scss'

interface CreateTokenProps {
  boxToken: { apiToken: string, dateCreated: string }
}

export const CreateToken = (props: CreateTokenProps) => (
  <div className={'CreateToken'}>
    <header className={'CreateToken__header'}>
      <h2 className={'CreateToken__header__title'}>API Tokens</h2>
      <p className={'CreateToken__header__description'}>
        Manage the ways that you authorize requests to the Frost Api. API keys
        for server requests, <br />
        Tokenization keys for client requets, and Client-Side Encryption Keys
        for client side encryption.
      </p>
    </header>
    <div className={'CreateToken__text'}>
      <p className={'CreateToken__text__title'}>API Keys</p>
      <p className={'CreateToken__text__description'}>
        Some message here about API keys.
      </p>
    </div>
    <BoxToken apiToken={props.boxToken.apiToken} dateCreated={moment(parseInt(props.boxToken.dateCreated)).format('MM/DD/YYYY')} />
    <Button className={'CreateToken__button'} text={'Get API Key'} />
  </div>
)
