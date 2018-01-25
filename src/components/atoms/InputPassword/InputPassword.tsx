import * as classNames from 'classnames'
import * as React from 'react'
import { Input } from '../Input/Input'

interface complexityPassword {
    readonly lowerCase: number,
    readonly upperCase: number,
    readonly numeric: number,
    readonly symbol: number,
}

interface InputPasswordProps {
  readonly name: string
  readonly type: string
  readonly className?: string
  readonly placeholder?: string
  readonly required?: boolean
  readonly minLength?: number
  readonly maxLength?: number
  readonly onChange?: (event: any) => void
  readonly complexity: complexityPassword
}

const onChange = (event: any, onChange: any, complexity: complexityPassword) => {
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
  validatePassword(complexity, event.target)
  if (typeof onChange === 'function') onChange(currentData, elements)
}

const validatePassword = (complexity: complexityPassword, target: HTMLInputElement ) => {
    const value = target.value
    const message = {
        lowerCase: `${complexity.lowerCase} lowercase character \n`,
        upperCase: `${complexity.upperCase} uppercase character`,
        numeric: `${complexity.numeric} numeric character`,
        symbol: `${complexity.symbol} symbol character`,
    };

    const validations: string[] = [];
    if (!((value.match(/[a-z]/g) || []).length >= complexity.lowerCase)) validations.push(message.lowerCase)
    if (!((value.match(/[A-Z]/g) || []).length >= complexity.upperCase)) validations.push(message.upperCase)
    if (!((value.match(/[0-9]/g) || []).length >= complexity.numeric)) validations.push(message.numeric)
    if (!((value.match(/[^a-zA-Z0-9]/g) || []).length >= complexity.symbol)) validations.push(message.symbol)

    const messages = validations.length > 1 ? `Required, ${validations.join(', ')}` : ''
    value === '' ? target.setCustomValidity('') : target.setCustomValidity(messages)
}


export const InputPassword = (props: InputPasswordProps) => (
  <Input
    name={props.name}
    type={props.type}
    className={classNames('Input', props.className)}
    placeholder={props.placeholder}
    required={props.required}
    onKeyUp={e => onChange(e, props.onChange, props.complexity)}
    maxLength={props.maxLength ? props.maxLength : -1}
    minLength={props.minLength ? props.minLength : -1}
  />
)
