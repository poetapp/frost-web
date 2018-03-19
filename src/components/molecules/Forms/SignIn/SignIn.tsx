import { Input } from 'components/atoms/Input/Input'
import { Form } from 'components/molecules/Form/Form'
import * as React from 'react'
import { Link } from 'react-router'
import './SignIn.scss'

interface SignInProps {
  readonly onSubmit: (event: any) => any
  readonly disabledButton?: boolean
  readonly serverErrors?: any
}

let formEl: HTMLFormElement
let inputEl: HTMLInputElement

export class SignIn extends React.Component<SignInProps, undefined> {
  constructor() {
    super()
    this.onChangeEmail = this.onChangeEmail.bind(this)
  }

  componentWillReceiveProps(newProps: any) {
    if (newProps.serverErrors.status) {
      const { message } = newProps.serverErrors

      if (message.includes('The specified resource does not exist.')) {
        inputEl.setCustomValidity(newProps.serverErrors.message)
        inputEl.focus()
      }

      formEl.reportValidity()
    }
  }

  onChangeEmail(e: any) {
    const input = e.target
    input.setCustomValidity('')
  }

  render() {
    const { onSubmit, disabledButton } = this.props

    return (
      <div className={'SignIn'}>
        <Form
          onSubmit={onSubmit}
          legend={'Already Signed Up?'}
          textButton={'Login'}
          disabledButton={disabledButton}
          formRef={(el: HTMLFormElement) => (formEl = el)}
        >
          <Input
            name={'email'}
            type={'email'}
            placeholder={'Email'}
            inputRef={(el: HTMLInputElement) => (inputEl = el)}
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
        <Link className={'SignIn__forgot-password'} to={'/forgot-password'}>
          Forgot your password?
        </Link>
      </div>
    )
  }
}
