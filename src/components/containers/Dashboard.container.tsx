import { LogoutContainer } from 'components/containers/Logout.container'
import { NavigationContainer } from 'components/containers/Navigation.container'
import { DashboardTemplate } from 'components/templates/DashboardTemplate/DashboardTemplate'
import * as React from 'react'

interface DashboardContainerProps {
  readonly children?: JSX.Element
}

export const DashboardContainer = (props: DashboardContainerProps) => (
  <DashboardTemplate logout={LogoutContainer} navigation={NavigationContainer}>
    {props.children}
  </DashboardTemplate>
)
