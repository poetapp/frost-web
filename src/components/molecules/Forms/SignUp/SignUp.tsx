import * as React from 'react'
import { Link } from 'react-router'
import { Input } from '../../../atoms/Input/Input'
import { InputPassword } from '../../../atoms/InputPassword/InputPassword'
import { Checkbox } from '../../../molecules/Checkbox/Checkbox'
import { Form } from '../../../molecules/Form/Form'

interface SignUpProps {
  readonly onSubmit: (event: any) => any
  readonly disabledButton?: boolean
  readonly serverErrors?: any
  readonly form?: any
}

export class SignUp extends React.Component<SignUpProps, undefined> {
  private emailInput: HTMLInputElement
  private passwordInput: HTMLInputElement
  private form: HTMLFormElement
  constructor() {
    super()
    this.onValidate = this.onValidate.bind(this)
    this.onChangeRepeatPassword = this.onChangeRepeatPassword.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
  }

  componentWillReceiveProps(newProps: any) {
    if (newProps.serverErrors.status) {
      const { message } = newProps.serverErrors

      if (message.includes('Password Requirements')) {
        this.passwordInput.setCustomValidity(newProps.serverErrors.message)
        this.passwordInput.focus()
      }

      if (message.includes('The specified account already exists.')) {
        this.emailInput.setCustomValidity(newProps.serverErrors.message)
        this.emailInput.focus()
      }

      this.form.reportValidity()
    }
  }

  onValidate(data: any, elements: any) {
    const { password, confirmPassword } = data

    if (password !== confirmPassword) {
      elements.confirmPassword.setCustomValidity(`Passwords Don't Match`)
      return false
    }

    return true
  }

  onChangeRepeatPassword(e: any, data: any, elements: any) {
    const value = e.target.value
    const { password, confirmPassword } = data

    if (value !== '' && password !== confirmPassword)
      elements.confirmPassword.setCustomValidity(`Passwords Don't Match`)

    if (password === confirmPassword)
      elements.confirmPassword.setCustomValidity('')

    if (value === '') elements.confirmPassword.setCustomValidity('')
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
        onValidate={this.onValidate}
        legend={'Sign Up'}
        textButton={'Sign Up'}
        disabledButton={disabledButton}
        formRef={(el: HTMLFormElement) => (this.form = el)}
      >
        <Input
          name={'email'}
          type={'email'}
          placeholder={'Email'}
          required
          inputRef={(el: HTMLInputElement) => (this.emailInput = el)}
          onChange={this.onChangeEmail}
        />
        <InputPassword
          name={'password'}
          type={'password'}
          placeholder={'Password'}
          minLength={10}
          maxLength={30}
          complexity={{
            lowerCase: 1,
            upperCase: 1,
            numeric: 1,
            symbol: 1
          }}
          required
          inputRef={(el: HTMLInputElement) => (this.passwordInput = el)}
        />
        <Input
          name={'confirmPassword'}
          type={'password'}
          placeholder={'Repeat Password'}
          onChange={this.onChangeRepeatPassword.bind(this)}
          minLength={10}
          maxLength={30}
          required
        />
        <Checkbox name={'testnet'} required>
          I have read the legal <Link to={'/disclaimer'}>disclaimer</Link>
        </Checkbox>
      </Form>
    )
  }
}
