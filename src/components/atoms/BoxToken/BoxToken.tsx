import * as classNames from 'classnames'
import { Hash } from 'components/atoms/Hash/Hash'
import { ClassNameProps } from 'interfaces/Props'
import { ApiToken } from 'interfaces/Props'
import * as React from 'react'
import * as moment from 'moment'
import './BoxToken.scss'

const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}

const getDataToken = (token: string): ApiToken => { 
  const jwtDecoded = parseJwt(token)
  const { iat, exp } = jwtDecoded

  return {
    token,
    iat,
    exp,
  }
}

const isExpired = (expiration: number): boolean => {
  const exp = parseInt(moment.unix(expiration).format('x'))
  return moment(moment.now()).isAfter(exp)
}

const byMostRecently = ((a: ApiToken, b: ApiToken) => (a.iat > b.iat ? -1 : 1))

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
        isExpired(token.exp) ? 'BoxToken__item__date__expired' : ''
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
        {props.apiTokens.map(getDataToken).sort(byMostRecently).map(renderToken)}
      </tbody>
    </table>
  </div>
)
