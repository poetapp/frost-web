import * as React from 'react'
import { Button } from '../../atoms/Button/Button'
import './Form.scss'
require('formdata-polyfill')
interface FormProps {
  readonly legend: string
  readonly children?: any
  readonly textButton: string
  readonly onValidate?: (data: any, elements: any) => boolean
  readonly onSubmit?: (event: any) => any
}

const onSubmit = (
  event: any,
  submit = (data: object) => ({}),
  validate = (data: any, elements: any) => true
) => {
  event.preventDefault()
  const form = event.target
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
  if (validate(currentData, elements)) submit(currentData)
}

export const Form = (props: FormProps) => (
  <form
    className="Form"
    onSubmit={event => onSubmit(event, props.onSubmit, props.onValidate)}
  >
    <legend className="Form__legend">{props.legend}</legend>
    <div className="row">
      <div className="col-12">{props.children}</div>
      <div className="col-6">
        <Button text={props.textButton} />
      </div>
    </div>
  </form>
)