import { DashboardTemplate } from 'components/templates/DashboardTemplate/DashboardTemplate'
import { FrostState, NotificationBarState } from 'interfaces/Props'
import * as React from 'react'
import { connect } from 'react-redux'
import { LogoutContainer } from './Logout.container'
import { NavigationContainer } from './Navigation.container'

interface DashboardContainerProps {
  readonly children?: JSX.Element
  readonly notificationBar: NotificationBarState
}

const mapStateToProps = (state: FrostState): DashboardContainerProps => ({
  notificationBar: state.notificationBar,
})

export const Dashboard = (props: DashboardContainerProps) => (
  <DashboardTemplate logout={LogoutContainer} navigation={NavigationContainer} notificationBar={props.notificationBar}>
    {props.children}
  </DashboardTemplate>
)

export const DashboardContainer = connect(mapStateToProps)(Dashboard)
