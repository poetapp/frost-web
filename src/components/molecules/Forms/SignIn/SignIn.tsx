import * as React from 'react'
import { Input } from '../../../atoms/Input/Input'
import { Form } from '../../../molecules/Form/Form'

interface SignInProps {
  readonly onSubmit: (event: any) => any
}

export const SignIn = (props: SignInProps) => (
  <Form
    onSubmit={props.onSubmit}
    legend={'Already Signed Up?'}
    textButton={'Login'}
  >
    <Input name={'email'} type={'email'} placeholder={'Email'} required />
    <Input
      name={'password'}
      type={'password'}
      placeholder={'Password'}
      required
    />
  </Form>
)
