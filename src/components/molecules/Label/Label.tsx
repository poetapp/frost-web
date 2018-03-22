import * as classNames from 'classnames'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

interface LabelProps extends ClassNameProps {
  readonly children?: JSX.Element
  readonly text?: any
}

export const Label = (props: LabelProps): JSX.Element => (
  <div className={classNames('Label', props.className)}>
    {props.children}
    <label>{props.text}</label>
  </div>
)
