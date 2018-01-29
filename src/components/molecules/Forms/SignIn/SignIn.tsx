import * as React from 'react'
import { Input } from '../../../atoms/Input/Input'
import { Form } from '../../../molecules/Form/Form'

interface SignInProps {
  readonly onSubmit: (event: any) => any
  readonly disabledButton?: boolean
  readonly serverErrors?: any
}

export class SignIn extends React.Component<SignInProps, undefined> {
  private emailInput: HTMLInputElement
  private form: HTMLFormElement
  constructor() {
    super()
    this.onChangeEmail = this.onChangeEmail.bind(this)
  }

  componentWillReceiveProps(newProps: any) {
    if (newProps.serverErrors.status) {
      const { message } = newProps.serverErrors

      if (message.includes('The specified resource does not exist.')) {
        this.emailInput.setCustomValidity(newProps.serverErrors.message)
        this.emailInput.focus()
      }

      this.form.reportValidity()
    }
  }

  onChangeEmail(e: any) {
    const input = e.target
    input.setCustomValidity('')
  }

  render() {
    const { onSubmit, disabledButton } = this.props

    return (
      <Form
        onSubmit={onSubmit}
        legend={'Already Signed Up?'}
        textButton={'Login'}
        disabledButton={disabledButton}
        formRef={(el: HTMLFormElement) => (this.form = el)}
      >
        <Input
          name={'email'}
          type={'email'}
          placeholder={'Email'}
          inputRef={(el: HTMLInputElement) => (this.emailInput = el)}
          onChange={this.onChangeEmail}
          required
        />
        <Input
          name={'password'}
          type={'password'}
          placeholder={'Password'}
          minLength={10}
          maxLength={30}
          required
        />
      </Form>
    )
  }
}
