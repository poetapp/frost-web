import * as React from 'react'
import { Link } from 'react-router'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { ForgotPasswordContainer } from '../../containers/ForgotPassword.container'
import { LoadingPageContainer } from '../../containers/LoadingPage.container'
import './ForgotPassword.style.scss'

export const ForgotPasswordLayout = () => (
  <LoadingPageContainer>
    <div className="ForgotPassword">
      <Link to={'/'}>
        <LogoFrost className="ForgotPassword__LogoFrost" />
      </Link>
      <h1 className="ForgotPassword__title">
        Frost is an open API for publishers and content creators to interact
        with the Po.et Network.
      </h1>
      <div className={'row'}>
        <div className={'col-4'}>
          <ForgotPasswordContainer />
        </div>
      </div>
    </div>
  </LoadingPageContainer>
)
