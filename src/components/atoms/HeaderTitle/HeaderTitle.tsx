import * as classNames from 'classnames'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './HeaderTitle.scss'

interface HeaderTitleProps extends ClassNameProps {
  readonly children?: JSX.Element
}

export const HeaderTitle = (props: HeaderTitleProps) => (
  <div className={classNames('HeaderTitle', props.className)}>
    <h1 className={'HeaderTitle__title'}>{props.children}</h1>
  </div>
)
