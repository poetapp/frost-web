import * as React from 'react'
import { LoadingPageContainer } from '../../containers/LoadingPage.container'
import { RegisterLoginContainer } from '../../containers/RegisterLogin.container'

export const RegisterLoginLayout = () => (
  <LoadingPageContainer>
    <RegisterLoginContainer />
  </LoadingPageContainer>
)
