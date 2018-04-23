import { LogoFrost } from 'components/atoms/LogoFrost/LogoFrost'
import { ToastPage } from 'components/atoms/ToastPage/ToastPage'
import { ChangePasswordContainer } from 'components/containers/ChangePassword.container'
import { LoadingPageContainer } from 'components/containers/LoadingPage.container'
import * as React from 'react'
import { Link } from 'react-router'
import './ChangePasswordToken.style.scss'

export const ChangePasswordTokenLayout = () => (
  <LoadingPageContainer>
    <ToastPage>
      <div className="ChangePasswordToken">
        <Link to={'/'}>
          <LogoFrost className="ChangePasswordToken__LogoFrost" />
        </Link>
        <h1 className="ChangePasswordToken__title">
          TESTING A CHANGE
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
