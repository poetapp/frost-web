import * as React from 'react'
import { Input } from '../../atoms/Input/Input'
import { Label } from '../../molecules/Label/Label'
import './Checkbox.scss'

interface CheckboxProps {
  readonly name: string
  readonly required?: boolean
  readonly children?: JSX.Element
}

export const Checkbox = (props: CheckboxProps) => (
  <Label className={'Checkbox'} text={props.children}>
    <Input
      name={props.name}
      className={'Checkbox__Input'}
      type={'checkbox'}
      required={props.required}
    />
  </Label>
)
