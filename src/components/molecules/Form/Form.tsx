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
  readonly disabledButton?: boolean
  readonly formRef?: any
}



export class Form extends React.Component<
  FormProps,
  undefined
> {

  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(
    event: any,
    submit = (data: object) => ({}),
    validate = (data: any, elements: any) => true
  ) {
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


  render() {
    const { onSubmit, onValidate, formRef, legend, children, disabledButton, textButton } = this.props

    return (
      <form
        className="Form"
        onSubmit={event => this.onSubmit(event, onSubmit, onValidate)}
        ref={formRef}
      >
        <legend className="Form__legend">{legend}</legend>
        <div className="row">
          <div className="col-12">{children}</div>
          <div className="col-6">
            <Button text={textButton} disabled={disabledButton} />
          </div>
        </div>
      </form>
    )
    
  }
}