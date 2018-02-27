import * as React from 'react'
import { DashboardContainer } from '../../containers/Dashboard.container'
import { PanelOptions } from '../../molecules/PanelOptions/PanelOptions'

export const DashboardLayout = () => (
  <DashboardContainer>
    <PanelOptions />
  </DashboardContainer>
)
