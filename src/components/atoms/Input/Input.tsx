import * as classNames from 'classnames'
import * as React from 'react'
import './Input.scss'

interface InputProps {
  readonly name: string
  readonly type: string
  readonly className?: string
  readonly placeholder?: string
  readonly required?: boolean
  readonly minLength?: number
  readonly maxLength?: number
  readonly onChange?: (event: Event) => void
  readonly onKeyUp?: (event: Event) => void
}

const onChange = (event: any, onChange: any) => {
  event.preventDefault()
  const form = event.target.form
  const data = new FormData(form)
  const currentData: any = {}
  const elements: any = {}

  for (const key of data.keys()) {
    const input = form.elements[key]
    const value = input.value
    const name = input.name
    currentData[name] = value
    elements[name] = input
  }
  if (typeof onChange === 'function') onChange(event, currentData, elements)
}

const onKeyUp = (event: any, onKeyUp: any) => {
  event.preventDefault()
  const form = event.target.form
  const data = new FormData(form)
  const currentData: any = {}
  const elements: any = {}

  for (const key of data.keys()) {
    const input = form.elements[key]
    const value = input.value
    const name = input.name
    currentData[name] = value
    elements[name] = input
  }
  if (typeof onKeyUp === 'function') onKeyUp(event, currentData, elements)
}

export const Input = (props: InputProps) => (
  <input
    name={props.name}
    type={props.type}
    className={classNames('Input', props.className)}
    placeholder={props.placeholder}
    required={props.required}
    onChange={e => onChange(e, props.onChange)}
    onKeyUp={e => onKeyUp(e, props.onKeyUp)}
    maxLength={props.maxLength ? props.maxLength : -1}
    minLength={props.minLength ? props.minLength : -1}
  />
)
