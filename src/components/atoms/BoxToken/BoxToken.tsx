import * as classNames from 'classnames'
import { Hash } from 'components/atoms/Hash/Hash'
import { parseJwt, dateToTimestamp } from 'helpers'
import { ClassNameProps } from 'interfaces/Props'
import { ApiToken } from 'interfaces/Props'
import * as moment from 'moment'
import * as React from 'react'
import './BoxToken.scss'

const getParsedToken = (token: string): ApiToken => ({
  token,
  ...parseJwt(token)
})

const byIssueDate = (a: ApiToken, b: ApiToken) => dateToTimestamp(a.iat) > dateToTimestamp(b.iat) ? -1 : 1

const isDateAfterNow = (date: Date): boolean => moment(moment.now()).isAfter(date)

const renderToken = (token: ApiToken, key: number, total: number) => (
  <tr key={key} className={'BoxToken__item'}>
    <td>
      <span>{total - key}</span>
    </td>
    <td>
      <span className={'BoxToken__item__token'}>
        <Hash className="copyable-hash" textClickable>
          {token.token}
        </Hash>
      </span>
    </td>
    <td>
      <span className={'BoxToken__item__date'}>
        {moment(token.iat).format('MM/DD/YYYY hh:mm a')}
      </span>
    </td>
    <td>
      <span
        className={classNames(
          'BoxToken__item__date',
          isDateAfterNow(token.exp) && 'BoxToken__item__date__expired'
        )}
      >
        {moment(token.exp).format('MM/DD/YYYY hh:mm a')}
      </span>
    </td>
    <td>
      <div className={'BoxToken__item__actions'}>
        <button>Remove</button>
      </div>
    </td>
  </tr>
)
interface BoxTokenProps extends ClassNameProps {
  readonly apiTokens: string[]
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
        {props.apiTokens
          .map(getParsedToken)
          .sort(byIssueDate)
          .map((token, key) => renderToken(token, key, props.apiTokens.length) )}
      </tbody>
    </table>
  </div>
)
