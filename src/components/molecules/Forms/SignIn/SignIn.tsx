import { Input } from 'components/atoms/Input/Input'
import { Form } from 'components/molecules/Form/Form'
import * as React from 'react'
import { Link } from 'react-router'
import './SignIn.scss'

interface SignInProps {
  readonly onSubmit: (event: any, elements: any, form: any) => any
  readonly disabledButton?: boolean
  readonly serverErrors?: any
}

const onChangeEmail = (e: any) => {
  const input = e.target
  input.setCustomValidity('')
}

export const SignIn = (props: SignInProps) => (
  <div className={'SignIn'}>
    <Form
      onSubmit={props.onSubmit}
      legend={'Already Signed Up?'}
      textButton={'Login'}
      disabledButton={props.disabledButton}
    >
      <Input
        name={'email'}
        type={'email'}
        placeholder={'Email'}
        onChange={onChangeEmail}
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
