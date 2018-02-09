import * as classNames from 'classnames'
import * as React from 'react'
import { Button } from '../../atoms/Button/Button'
import './LegendVerifiedAccount.scss'

interface LegendVerifiedAccountProps {
  readonly show?: boolean
  readonly onClick?: (event: Event) => void
  readonly retryWait?: boolean
}

export const LegendVerifiedAccount = (props: LegendVerifiedAccountProps) => (
  <div
    className={classNames(
      'LegendVerifiedAccount',
      props.show ? '' : 'LegendVerifiedAccount--hide'
    )}
  >
    {props.retryWait ? (
      <p className={'LegendVerifiedAccount__text'}>
        Please, verify your email account.
      </p>
    ) : (
      <p className={'LegendVerifiedAccount__text'}>
        Please verify your email address.<Button
          onClick={props.onClick}
          className={'LegendVerifiedAccount__button'}
          text={'Resend Email'}
        />
      </p>
    )}
  </div>
)
