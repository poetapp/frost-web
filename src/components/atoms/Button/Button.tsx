import * as classNames from 'classnames'
import * as React from 'react'
import { ClassNameProps } from '../../../interfaces/Props'
import './Button.scss'

interface ButtonProps extends ClassNameProps {
  readonly text?: string
  readonly disabled?: boolean
  readonly onClick?: (event: Event) => void
}

export const Button = (props: ButtonProps) => (
  <button
    className={classNames('Button', props.className)}
    {...(props.disabled ? { disabled: 'disabled' } : {})}
    {...(props.onClick ? { onClick: props.onClick } : {})}
  >
    {props.text}
  </button>
)
