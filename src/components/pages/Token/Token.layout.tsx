import { CreateTokenContainer } from 'components/containers/CreateToken.container'
import { DashboardContainer } from 'components/containers/Dashboard.container'
import { LoadingPageContainer } from 'components/containers/LoadingPage.container'
import * as React from 'react'

export const TokenLayout = () => (
  <LoadingPageContainer>
    <DashboardContainer>
      <CreateTokenContainer />
    </DashboardContainer>
  </LoadingPageContainer>
)
