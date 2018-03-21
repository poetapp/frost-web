import * as classNames from 'classnames'
import { getParsedForm } from 'helpers'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './Input.scss'

interface InputProps extends ClassNameProps {
  readonly name: string
  readonly type: string
  readonly placeholder?: string
  readonly required?: boolean
  readonly minLength?: number
  readonly maxLength?: number
  readonly onChange?: (event?: Event, data?: any, elements?: any) => void
  readonly onKeyUp?: (event?: Event, data?: any, elements?: any) => void
  readonly onFocus?: (event?: Event, data?: any, elements?: any) => void
  readonly autoFocus?: boolean
  readonly ref?: any
  readonly inputRef?: any
}

const onEvent = (event: any, callback: any, props: InputProps) => {
  if (props.type !== 'checkbox') event.preventDefault()
  const form = event.target.form
  const { currentData, elements } = getParsedForm(form)
  if (typeof callback === 'function') callback(event, currentData, elements)
}

export const Input = (props: InputProps) => (
  <input
    name={props.name}
    type={props.type}
    required={props.required}
    placeholder={props.placeholder}
    className={classNames('Input', props.className)}
    onChange={e => onEvent(e, props.onChange, props)}
    onKeyUp={e => onEvent(e, props.onKeyUp, props)}
    onFocus={e => onEvent(e, props.onFocus, props)}
    {...(props.maxLength ? { maxLength: props.maxLength } : {})}
    {...(props.minLength ? { minLength: props.minLength } : {})}
    {...(props.autoFocus ? { autoFocus: true } : {})}
  />
)
