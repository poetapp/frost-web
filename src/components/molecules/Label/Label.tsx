import * as classNames from 'classnames'
import * as React from 'react'
import { ClassNameProps } from '../../../interfaces/Props'

interface LabelProps extends ClassNameProps {
  readonly children?: JSX.Element
  readonly text?: any
}

export const Label = function render(props: LabelProps) {
  return (
    <div className={classNames('Label', props.className)}>
      {props.children}
      <label>{props.text}</label>
    </div>
  )
}
