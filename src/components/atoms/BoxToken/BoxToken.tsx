import * as classNames from 'classnames'
import { Hash } from 'components/atoms/Hash/Hash'
import { parseJwt } from 'helpers'
import { ClassNameProps } from 'interfaces/Props'
import { ApiToken } from 'interfaces/Props'
import * as moment from 'moment'
import * as React from 'react'
import './BoxToken.scss'

const getParsedToken = (token: string): ApiToken => ({
  token,
  ...parseJwt(token)
})

const byIssueDate = (a: ApiToken, b: ApiToken) =>
  a.iat.getTime() > b.iat.getTime() ? -1 : 1

const isDateAfterNow = (date: Date): boolean => moment().isAfter(date)

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
        title={
          isDateAfterNow(token.exp)
            ? ''
            : moment(token.exp).format('MM/DD/YYYY hh:mm a')
        }
        className={classNames(
          'BoxToken__item__date',
          isDateAfterNow(token.exp)
            ? 'BoxToken__item__date__expired'
            : 'BoxToken__item__date__help'
        )}
      >
        {isDateAfterNow(token.exp)
          ? moment(token.exp).format('MM/DD/YYYY hh:mm a')
          : moment(token.exp).fromNow()}
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
  readonly apiTokens: ReadonlyArray<string>
}

export const BoxToken = (props: BoxTokenProps): JSX.Element => (
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
          .map((token, key) => renderToken(token, key, props.apiTokens.length))}
      </tbody>
    </table>
  </div>
)
