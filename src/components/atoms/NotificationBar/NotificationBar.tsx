import * as classNames from 'classnames'
import * as React from 'react'
import './NotificationBar.scss'

interface NotificationBarProps {
  readonly children?: any
  readonly type?: 'success' | 'fail'
  readonly action?: 'fade-in' | 'fade-out' | 'hide'
}

export const NotificationBar = (props: NotificationBarProps) => (
  <div className={classNames('NotificationBar', `NotificationBar__${props.type}`, `NotificationBar__${props.action}`)}>
    {props.children}
  </div>
)
