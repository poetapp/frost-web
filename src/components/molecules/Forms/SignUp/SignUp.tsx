import { Input } from 'components/atoms/Input/Input'
import { InputPassword } from 'components/atoms/InputPassword/InputPassword'
import { Checkbox } from 'components/molecules/Checkbox/Checkbox'
import { Form } from 'components/molecules/Form/Form'
import * as React from 'react'
import { Link } from 'react-router'

interface SignUpProps {
  readonly onSubmit: (event: any) => any
  readonly disabledButton?: boolean
  readonly serverErrors?: any
  readonly form?: any
}

let formEl: HTMLFormElement
let inputEl: HTMLInputElement
let passwordInputEl: HTMLInputElement
export class SignUp extends React.Component<SignUpProps, undefined> {
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
        passwordInputEl.setCustomValidity(newProps.serverErrors.message)
        passwordInputEl.focus()
      }

      if (message.includes('The specified account already exists.')) {
        inputEl.setCustomValidity(newProps.serverErrors.message)
        inputEl.focus()
      }

      formEl.reportValidity()
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
        formRef={(el: HTMLFormElement) => (formEl = el)}
      >
        <Input
          name={'email'}
          type={'email'}
          placeholder={'Email'}
          required
          inputRef={(el: HTMLInputElement) => (inputEl = el)}
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
          inputRef={(el: HTMLInputElement) => (passwordInputEl = el)}
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
