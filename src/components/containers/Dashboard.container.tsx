import * as PropTypes from 'prop-types'
import * as React from 'react'
import { connect } from 'react-redux'
import { DashboardTemplate } from '../templates/DashboardTemplate/DashboardTemplate'
import { LogoutContainer } from './Logout.container'
import { NavigationContainer } from './Navigation.container'

export class Dashboard extends React.Component<any, undefined> {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
  }

  render() {
    const { children } = this.props

    return (
      <DashboardTemplate
        logout={LogoutContainer}
        navigation={NavigationContainer}
      >
        {children}
      </DashboardTemplate>
    )
  }
}

const mapStateToProps = (state: any) => ({})

export const DashboardContainer = connect(mapStateToProps)(Dashboard)
