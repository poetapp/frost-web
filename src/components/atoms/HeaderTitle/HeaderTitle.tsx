import * as classNames from 'classnames'
import * as React from 'react'
import './HeaderTitle.scss'

interface HeaderTitleProps {
  readonly className?: string
  readonly title: string
}

export const HeaderTitle = (props: HeaderTitleProps) => (
  <div className={classNames('HeaderTitle', props.className)}>
    <h1 className={'HeaderTitle__title'}>{props.title}</h1>
  </div>
)
