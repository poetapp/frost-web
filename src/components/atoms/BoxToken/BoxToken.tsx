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

const byIssueDate = (a: ApiToken, b: ApiToken) => (a.iat > b.iat ? -1 : 1)

const isDateAfterNow = (unixTimestamp: number): boolean => {
  const exp = parseInt(moment.unix(unixTimestamp).format('x'), 10)
  return moment(moment.now()).isAfter(exp)
}

const renderToken = (token: ApiToken, key: number) => (
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
        {moment.unix(token.iat).format('MM/DD/YYYY hh:mm a')}
      </span>
    </td>
    <td>
      <span
        className={classNames(
          'BoxToken__item__date',
          isDateAfterNow(token.exp) && 'BoxToken__item__date__expired'
        )}
      >
        {moment.unix(token.exp).format('MM/DD/YYYY hh:mm a')}
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
          .map(renderToken)}
      </tbody>
    </table>
  </div>
)
