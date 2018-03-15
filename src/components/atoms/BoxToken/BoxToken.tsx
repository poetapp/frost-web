import * as classNames from 'classnames'
import { Hash } from 'components/atoms/Hash/Hash'
import { ClassNameProps } from 'interfaces/Props'
import { ApiToken } from 'interfaces/Props'
import * as React from 'react'
import './BoxToken.scss'

interface BoxTokenProps extends ClassNameProps {
  readonly apiTokens: ApiToken[]
}

export const BoxToken = (props: BoxTokenProps) => (
  <div className={classNames('BoxToken', props.className)}>
    <table className={'BoxToken__table'}>
      <thead className={'BoxToken__header'}>
        <tr>
          <td>
            <p>#</p>
          </td>
          <td>
            <p>Token</p>
          </td>
          <td>
            <p>Creation</p>
          </td>
          <td>
            <p>Expiry</p>
          </td>
        </tr>
      </thead>
      <tbody>
        {props.apiTokens.map((token: ApiToken, key) => (
          <tr key={key} className={'BoxToken__item'}>
            <td>
              <span>#000000</span>
            </td>
            <td>
              <span className={'BoxToken__item__token'}>
                <Hash className="copyable-hash" textClickable>
                  {token.token}
                </Hash>
              </span>
            </td>
            <td>
              {' '}
              <span className={'BoxToken__item__date'}>
                {token.dateCreated}
              </span>
            </td>
            <td>
              <span
                className={classNames(
                  'BoxToken__item__date',
                  token.isExpired ? 'BoxToken__item__date__expired' : ''
                )}
              >
                {token.expiration}
              </span>
            </td>
            <td>
              <div className={'BoxToken__item__actions'}>
                <button>Remove</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
