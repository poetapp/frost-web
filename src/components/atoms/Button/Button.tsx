import * as classNames from 'classnames'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './Button.scss'

interface ButtonProps extends ClassNameProps {
  readonly text?: string
  readonly disabled?: boolean
  readonly onClick?: (event: React.SyntheticEvent) => void
  readonly type?: 'primary' | 'danger'
}

export const Button = (props: ButtonProps) => (
  <button
    className={classNames('Button', props.className, `Button__${props.type}`)}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.text}
  </button>
)
