import { LoadingPageContainer } from 'components/containers/LoadingPage.container'
import { RegisterLoginContainer } from 'components/containers/RegisterLogin.container'
import * as React from 'react'

export const RegisterLoginLayout = () => (
  <LoadingPageContainer>
    <RegisterLoginContainer />
  </LoadingPageContainer>
)
