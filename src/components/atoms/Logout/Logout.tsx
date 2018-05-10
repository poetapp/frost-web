import * as classNames from 'classnames'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './Logout.scss'

interface LogoutProps extends ClassNameProps {
  readonly email?: string
  readonly onLogout?: () => void
}

export const Logout = (props: LogoutProps) => (
  <div className={classNames('Logout d-flex flex-column align-items-end', props.className)}>
    <p className={'Logout__text'}>{props.email}</p>
    <button className={'Logout__button'} onClick={props.onLogout}>
      Logout
    </button>
  </div>
)
