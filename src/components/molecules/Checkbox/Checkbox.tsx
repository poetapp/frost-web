import { Input } from 'components/atoms/Input/Input'
import { Label } from 'components/molecules/Label/Label'
import * as React from 'react'
import { ReactNode } from 'react'
import './Checkbox.scss'

interface CheckboxProps {
  readonly name: string
  readonly required?: boolean
  readonly children?: ReactNode
}

export const Checkbox = (props: CheckboxProps) => (
  <Label className={'Checkbox'} text={props.children}>
    <Input name={props.name} className={'Checkbox__Input'} type={'checkbox'} required={props.required} />
  </Label>
)
