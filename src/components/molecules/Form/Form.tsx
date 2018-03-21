import { Button } from 'components/atoms/Button/Button'
import { getParsedForm } from 'helpers'
import * as React from 'react'
import './Form.scss'
require('formdata-polyfill')
interface FormProps {
  readonly legend: string
  readonly children?: JSX.Element
  readonly textButton: string
  readonly onValidate?: (data: any, elements: any) => boolean
  readonly onSubmit?: (event: any, elements: any, form: any) => any
  readonly disabledButton?: boolean
  readonly formRef?: any
}

const onSubmit = (
  event: any,
  submit = (data: object, elements: any, form: any) => ({}),
  validate = (data: any, elements: any) => true
) => {
  event.preventDefault()
  const form = event.target
  const { currentData, elements } = getParsedForm(form)
  if (validate(currentData, elements)) submit(currentData, elements, form)
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
        <Button text={props.textButton} disabled={props.disabledButton} />
      </div>
    </div>
  </form>
)
