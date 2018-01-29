import * as React from 'react'
import { Link } from 'react-router'
import { Input } from '../../../atoms/Input/Input'
import { Form } from '../../../molecules/Form/Form'
import './ForgotPassword.scss'

interface ForgotPasswordProps {
  readonly onSubmit: (event: any, elements: any) => any
}

export const ForgotPassword = (props: ForgotPasswordProps) => (
  <div className={'ForgotPassword'}>
    <Form
      onSubmit={props.onSubmit}
      legend={'Forgot password?'}
      textButton={'Send email'}
    >
      <Input name={'email'} type={'email'} placeholder={'Email'} required />
    </Form>
    <Link className={'ForgotPassword__login'} to={'/login'}>
      Go to Login{' '}
    </Link>
  </div>
)
