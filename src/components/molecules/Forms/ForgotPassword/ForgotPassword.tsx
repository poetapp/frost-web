import * as React from 'react'
import { Input } from '../../../atoms/Input/Input'
import { Form } from '../../../molecules/Form/Form'

interface ForgotPasswordProps {
  readonly onSubmit: (event: any) => any
}

export const ForgotPassword = (props: ForgotPasswordProps) => (
  <Form
    onSubmit={props.onSubmit}
    legend={'Forgot password?'}
    textButton={'Send email'}
  >
    <Input name={'email'} type={'email'} placeholder={'Email'} required />
  </Form>
)
