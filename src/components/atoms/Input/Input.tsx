import * as classNames from 'classnames'
import * as React from 'react'
import './Input.scss'

interface InputProps {
  readonly name: string
  readonly type: string
  readonly className?: string
  readonly placeholder?: string
  readonly required?: boolean
  readonly minlength?: number
  readonly maxlength?: number
  readonly onChange?: (event: any) => void
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
  if (typeof onChange === 'function') onChange(currentData, elements)
}

export const Input = (props: InputProps) => (
  <input
    name={props.name}
    type={props.type}
    className={classNames('Input', props.className)}
    placeholder={props.placeholder}
    required={props.required}
    onChange={e => onChange(e, props.onChange)}
  />
)
