import { Input } from 'components/atoms/Input/Input'
import 'components/molecules/Checkbox/Checkbox.scss'
import { Label } from 'components/molecules/Label/Label'
import * as React from 'react'

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
