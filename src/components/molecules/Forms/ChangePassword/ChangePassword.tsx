import * as React from 'react'
import { Input } from '../../../atoms/Input/Input'
import { Form } from '../../../molecules/Form/Form'

interface ChangePasswordProps {
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

export const ChangePassword = (props: ChangePasswordProps) => (
  <Form
    onSubmit={props.onSubmit}
    legend={'Change password'}
    textButton={'Change password'}
    onValidate={onValidate}
  >
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
  </Form>
)
