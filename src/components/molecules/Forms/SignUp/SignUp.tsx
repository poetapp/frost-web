import { Input } from 'components/atoms/Input/Input'
import { InputPassword } from 'components/atoms/InputPassword/InputPassword'
import { Checkbox } from 'components/molecules/Checkbox/Checkbox'
import { Form } from 'components/molecules/Form/Form'
import * as React from 'react'
import { Link } from 'react-router'

interface SignUpProps {
  readonly onSubmit: (event: any, elements: any, form: any) => any
  readonly disabledButton?: boolean
  readonly serverErrors?: any
  readonly form?: any
}

const onValidate = (data: any, elements: any) => {
  const { password, confirmPassword } = data

  if (password !== confirmPassword) {
    elements.confirmPassword.setCustomValidity(`Passwords Don't Match`)
    return false
  }

  return true
}

const onChangeRepeatPassword = (e: any, data: any, elements: any) => {
  const value = e.target.value
  const { password, confirmPassword } = data

  if (value !== '' && password !== confirmPassword)
    elements.confirmPassword.setCustomValidity(`Passwords Don't Match`)

  if (password === confirmPassword)
    elements.confirmPassword.setCustomValidity('')

  if (value === '') elements.confirmPassword.setCustomValidity('')
}

const onChangeEmail = (e: any) => {
  const input = e.target
  input.setCustomValidity('')
}

export const SignUp = (props: SignUpProps) => (
  <Form
    onSubmit={props.onSubmit}
    onValidate={onValidate}
    legend={'Sign Up'}
    textButton={'Sign Up'}
    disabledButton={props.disabledButton}
  >
    <Input
      name={'email'}
      type={'email'}
      placeholder={'Email'}
      required
      onChange={onChangeEmail}
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
    />
    <Input
      name={'confirmPassword'}
      type={'password'}
      placeholder={'Repeat Password'}
      onChange={onChangeRepeatPassword}
      minLength={10}
      maxLength={30}
      required
    />
    <Checkbox name={'testnet'} required>
      I have read the legal <Link to={'/disclaimer'}>disclaimer</Link>
    </Checkbox>
  </Form>
)
