import { DashboardTemplate } from 'components/templates/DashboardTemplate/DashboardTemplate'
import { FrostState, NotificationBarState } from 'interfaces/Props'
import * as React from 'react'

import { toggleNetowork } from 'feature-toggles/features'
import { connect } from 'react-redux'
import { LogoutContainer } from './Logout.container'
import { NavigationContainer } from './Navigation.container'

interface DashboardContainerProps {
  readonly children?: React.ReactNode
  readonly notificationBar: NotificationBarState
}

const mapStateToProps = (state: FrostState): DashboardContainerProps => ({
  notificationBar: state.notificationBar,
})

export const Dashboard = (props: DashboardContainerProps) => (
  <DashboardTemplate
    logout={LogoutContainer}
    navigation={NavigationContainer}
    notificationBar={props.notificationBar}
    toggleNetwork={toggleNetowork}
  >
    {props.children}
  </DashboardTemplate>
)

export const DashboardContainer = connect(mapStateToProps)(Dashboard)
