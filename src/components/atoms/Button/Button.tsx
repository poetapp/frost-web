import * as classNames from 'classnames'
import 'components/atoms/Button/Button.scss'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

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
