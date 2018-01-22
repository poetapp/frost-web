import * as React from 'react'
import { Input } from '../../../atoms/Input/Input'
import { Checkbox } from '../../../molecules/Checkbox/Checkbox'
import { Form } from '../../../molecules/Form/Form'

interface SignUpProps {
  readonly onSubmit: (event: any) => any
}

const onValidate = (data: any, elements: any) => {
  const { password, confirmPassword } = data

  if (password !== confirmPassword) {
    elements.confirmPassword.setCustomValidity(`Passwords Don't Match`)
    return false
  }

  return true
}

const onchange = (currentData: object, elements: any) => {
  elements.confirmPassword.setCustomValidity('')
}

export const SignUp = (props: SignUpProps) => (
  <Form
    onSubmit={props.onSubmit}
    onValidate={onValidate}
    legend={'Sign Up'}
    textButton={'Sign Up'}
  >
    <Input name={'email'} type={'email'} placeholder={'Email'} required />
    <Input
      name={'password'}
      type={'password'}
      placeholder={'Password'}
      required
    />
    <Input
      name={'confirmPassword'}
      type={'password'}
      placeholder={'Password'}
      onChange={onchange.bind(this)}
      required
    />
    <Checkbox
      name={'testnet'}
      text={'I understand that Frost App is in beta and in testnet'}
      required
    />
  </Form>
)
