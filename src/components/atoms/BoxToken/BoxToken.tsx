import * as classNames from 'classnames'
import * as React from 'react'
import { ClassNameProps } from '../../../interfaces/Props'
import { ApiToken } from '../../../interfaces/Props'
import { Hash } from '../../atoms/Hash/Hash'
import './BoxToken.scss'

interface BoxTokenProps extends ClassNameProps {
  readonly apiTokens: ApiToken[]
}

export const BoxToken = (props: BoxTokenProps) => (
  <div className={classNames('BoxToken', props.className)}>
    <header className={'BoxToken__header'}>
      <p>Token Name</p>
    </header>
    <ul className={'BoxToken__list'}>
      {props.apiTokens.map((token: ApiToken, key) => (
        <li key={key} className={'BoxToken__list__item'}>
          <div className={'BoxToken__list__item__description'}>
            <p>
              <span className={'BoxToken__list__item__description__name'}>
                #000000
              </span>
              <span className={'BoxToken__list__item__description__token'}>
                <Hash className="copyable-hash" textClickable>
                  {token.token}
                </Hash>
              </span>
              <span className={'BoxToken__list__item__description__date'}>
                {token.dateCreated}
              </span>
              <span
                className={classNames(
                  'BoxToken__list__item__description__date',
                  token.isExpired
                    ? 'BoxToken__list__item__description__date__expired'
                    : ''
                )}
              >
                {token.expiration}
              </span>
            </p>
          </div>
          <div className={'BoxToken__list__item__actions'}>
            <button>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
