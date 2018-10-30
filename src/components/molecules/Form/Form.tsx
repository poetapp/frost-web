import { Button } from 'components/atoms/Button/Button'
import { getParsedForm } from 'helpers'
import * as React from 'react'

import './Form.scss'
require('formdata-polyfill')

interface FormProps {
  readonly legend: string
  readonly children?: React.ReactNode
  readonly textButton: string
  readonly onValidate?: (data: any, elements: any) => boolean
  readonly onSubmit?: (event: any, elements: any) => any
  readonly disabledButton?: boolean
  readonly formRef?: any
}

export class Form extends React.Component<FormProps, undefined> {
  readonly onSubmit = (
    event: any,
    submit = (data: object, elements: any) => ({}),
    validate = (data: any, elements: any) => true,
  ): void => {
    event.preventDefault()
    const form = event.target
    const { currentData, elements } = getParsedForm(form)
    if (validate(currentData, elements)) submit(currentData, elements)
  }

  render(): JSX.Element {
    const { onSubmit, onValidate, formRef, legend, children, disabledButton, textButton } = this.props

    return (
      <form className="Form" onSubmit={event => this.onSubmit(event, onSubmit, onValidate)} ref={formRef}>
        <legend className="Form__legend">{legend}</legend>
        <div className="row">
          <div className="col-12">{children}</div>
          <div className="col-6 submit-button">
            <Button text={textButton} disabled={disabledButton} />
          </div>
        </div>
      </form>
    )
  }
}
