import * as classNames from 'classnames'
import { Input } from 'components/atoms/Input/Input'
import { getParsedForm } from 'helpers'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

interface ComplexityPassword {
  readonly lowerCase: number
  readonly upperCase: number
  readonly numeric: number
  readonly symbol: number
}

interface InputPasswordProps extends ClassNameProps {
  readonly name: string
  readonly type: string
  readonly placeholder?: string
  readonly required?: boolean
  readonly minLength?: number
  readonly maxLength?: number
  readonly onChange?: (event: any) => void
  readonly complexity?: ComplexityPassword
  readonly inputRef?: any
}

const onChange = (event: any, onChange: any, complexity: ComplexityPassword) => {
  event.preventDefault()

  const form = event.target.form
  const { currentData, elements } = getParsedForm(form)
  validatePassword(complexity, event.target)
  if (typeof onChange === 'function') onChange(currentData, elements)
}

const validatePassword = (complexity: ComplexityPassword, target: HTMLInputElement) => {
  const value = target.value
  const message = {
    lowerCase: `${complexity.lowerCase} lowercase character \n`,
    upperCase: `${complexity.upperCase} uppercase character`,
    numeric: `${complexity.numeric} numeric character`,
    symbol: `${complexity.symbol} symbol character`,
  }

  const complexityPatterns = {
    lowerCase: /[a-z]/g,
    upperCase: /[A-Z]/g,
    numeric: /[0-9]/g,
    symbol: /[^a-zA-Z0-9]/g,
  }

  const entries = Object.entries(complexity)
  const validations: ReadonlyArray<string> = entries.reduce(
    (acum: ReadonlyArray<string>, validation: [keyof ComplexityPassword, number]): ReadonlyArray<string> => {
      const typeComplexity = validation[0]
      const valueComplexity = validation[1]
      const pattern = complexityPatterns[typeComplexity]
      return !((value.match(pattern) || []).length >= valueComplexity) ? [...acum, message[typeComplexity]] : acum
    },
    []
  )

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
    inputRef={props.inputRef}
  />
)
