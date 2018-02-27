import * as React from 'react'
import { LoadingPageContainer } from '../../containers/LoadingPage.container'
import { VerifiedAccountContainer } from '../../containers/VerifiedAccount.container'

export const VerifiedAccountLayout = () => (
  <LoadingPageContainer>
    <VerifiedAccountContainer />
  </LoadingPageContainer>
)
