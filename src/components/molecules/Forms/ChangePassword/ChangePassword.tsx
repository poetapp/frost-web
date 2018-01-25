import * as React from 'react'
import { Input } from '../../../atoms/Input/Input'
import { Form } from '../../../molecules/Form/Form'
import { InputPassword } from '../../../atoms/InputPassword/InputPassword'

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

const onChangeRepeatPassword = (e: any, data: any, elements: any) => {
  const value = e.target.value
  const { password, confirmPassword } = data

  if (value !== '' && password !== confirmPassword) 
    elements.confirmPassword.setCustomValidity(`Passwords Don't Match`)
  
  if (password === confirmPassword) 
    elements.confirmPassword.setCustomValidity('')

  if (value === '' ) 
    elements.confirmPassword.setCustomValidity('')
}


export const ChangePassword = (props: ChangePasswordProps) => (
  <Form
    onSubmit={props.onSubmit}
    legend={'Change password'}
    textButton={'Change password'}
    onValidate={onValidate}
  >
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
      onChange={onChangeRepeatPassword.bind(this)}
      minLength={10}
      maxLength={30}
      required
    />
  </Form>
)
