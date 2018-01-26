import * as React from 'react'
import { Input } from '../../../atoms/Input/Input'
import { Checkbox } from '../../../molecules/Checkbox/Checkbox'
import { Form } from '../../../molecules/Form/Form'
import { InputPassword } from '../../../atoms/InputPassword/InputPassword'

interface SignUpProps {
  readonly onSubmit: (event: any) => any
  readonly disabledButton?: boolean
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

export const SignUp = (props: SignUpProps) => (
  <Form
    onSubmit={props.onSubmit}
    onValidate={onValidate}
    legend={'Sign Up'}
    textButton={'Sign Up'}
    disabledButton={props.disabledButton}
  >
    <Input name={'email'} type={'email'} placeholder={'Email'} required />
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
    <Checkbox
      name={'testnet'}
      text={'I understand that Frost App is in beta and in testnet'}
      required
    />
  </Form>
)
