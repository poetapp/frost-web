import { DashboardContainer } from 'components/containers/Dashboard.container'
import { PanelOptionsContainer } from 'components/containers/PanelOptionContainer'
import * as React from 'react'

export const DashboardLayout = () => (
  <DashboardContainer>
    <PanelOptionsContainer />
  </DashboardContainer>
)
