import * as classNames from 'classnames'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

import './BoxSimple.scss'

interface BoxSimpleProps extends ClassNameProps {
  readonly title?: string
  readonly description?: string
  readonly header?: any
}

export const BoxSimple = (props: BoxSimpleProps) => (
  <div className={classNames('BoxSimple', props.className)}>
    {props.header}
    <h3 className={'BoxSimple__title'}>{props.title}</h3>
    <p className={'BoxSimple__description'}>{props.description}</p>
  </div>
)
