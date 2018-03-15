import { DashboardTemplate } from 'components/templates/DashboardTemplate/DashboardTemplate'
import * as React from 'react'
import { LogoutContainer } from './Logout.container'
import { NavigationContainer } from './Navigation.container'

interface DashboardContainerProps {
  readonly children?: JSX.Element
}

export const DashboardContainer = (props: DashboardContainerProps) => (
  <DashboardTemplate logout={LogoutContainer} navigation={NavigationContainer}>
    {props.children}
  </DashboardTemplate>
)
