import * as classNames from 'classnames'
import * as React from 'react'
import './Button.scss'

interface ButtonProps {
  readonly text?: string
  readonly className?: string
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
