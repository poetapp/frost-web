import * as React from 'react'
import { Link } from 'react-router'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { ToastPage } from '../../atoms/ToastPage/ToastPage'
import { ChangePasswordContainer } from '../../containers/ChangePassword.container'
import { LoadingPageContainer } from '../../containers/LoadingPage.container'
import './ChangePasswordToken.style.scss'

export const ChangePasswordTokenLayout = () => (
  <LoadingPageContainer>
    <ToastPage>
      <div className="ChangePasswordToken">
        <Link to={'/'}>
          <LogoFrost className="ChangePasswordToken__LogoFrost" />
        </Link>
        <h1 className="ChangePasswordToken__title">
          Frost is an open API for publishers and content creators to interact
          with the Po.et Network.
        </h1>
        <div className={'row'}>
          <div className={'col-4'}>
            <ChangePasswordContainer />
          </div>
        </div>
      </div>
    </ToastPage>
  </LoadingPageContainer>
)
