import * as React from 'react'
import { DashboardTemplate } from '../templates/DashboardTemplate/DashboardTemplate'
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
