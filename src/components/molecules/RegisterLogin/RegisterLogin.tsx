import * as React from 'react'
import { Link } from 'react-router'

import { LogoPoetBlack } from 'components/atoms/LogoPoetBlack/LogoPoetBlack'
import { ToastPage } from 'components/atoms/ToastPage/ToastPage'
import { SignIn } from 'components/molecules/Forms/SignIn/SignIn'
import { SignUp } from 'components/molecules/Forms/SignUp/SignUp'
import { StatusService } from 'interfaces/Props'

import './RegisterLogin.scss'

interface RegisterLoginProps {
  readonly onSubmitSignUp?: (data: object) => void
  readonly onSubmitSignIn?: (data: object) => void
  readonly signUp: StatusService
  readonly signIn: StatusService
}

export const RegisterLogin = (props: RegisterLoginProps) => (
  <ToastPage>
    <div className="RegisterLogin">
      <Link to={'/'}>
        <LogoPoetBlack className={'RegisterLogin__LogoPoetBlack'} />
      </Link>
      <h1 className="RegisterLogin__title">
        Po.et API is an open API for publishers and content creators to interact with the Po.et Network.
      </h1>
      <div className={'row'}>
        <div className={'col-4 RegisterLogin_signUp'}>
          <SignUp
            onSubmit={props.onSubmitSignUp}
            disabledButton={props.signUp.loading}
            serverErrors={props.signUp.error}
          />
        </div>
        <div className={'col-2'}>
          <hr className={'RegisterLogin__vertical-line'} />
        </div>
        <div className={'col-4 RegisterLogin__signIn'}>
          <SignIn
            onSubmit={props.onSubmitSignIn}
            disabledButton={props.signIn.loading}
            serverErrors={props.signIn.error}
          />
        </div>
      </div>
    </div>
  </ToastPage>
)
