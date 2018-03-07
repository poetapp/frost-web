import * as React from 'react'
import { CreateTokenContainer } from '../../containers/CreateToken.container'
import { DashboardContainer } from '../../containers/Dashboard.container'
import { LoadingPageContainer } from '../../containers/LoadingPage.container'

export const TokenLayout = () => (
  <LoadingPageContainer>
    <DashboardContainer>
      <CreateTokenContainer />
    </DashboardContainer>
  </LoadingPageContainer>
)
