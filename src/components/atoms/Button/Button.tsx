import * as classNames from 'classnames'
import * as React from 'react'
import './Button.scss'

interface ButtonProps {
  readonly text?: string
  readonly className?: string
  readonly disabled?: boolean
}

export const Button = (props: ButtonProps) => (
  <button className={classNames('Button', props.className)} {...props.disabled ?  {'disabled' : 'disabled'} : {}}>
    {props.text}
  </button>
)
