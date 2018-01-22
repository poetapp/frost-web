import * as React from 'react'
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Actions } from '../../../actions'
import { DashboardContainer } from '../../containers/Dashboard.container'
import { PanelOptions } from '../../molecules/PanelOptions/PanelOptions'
import './Dashboard.style.scss'

export class Dashboard extends React.Component<any, undefined> {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.onLogout = this.onLogout.bind(this)
  }

  onLogout() {
    const { store } = this.context
    store.dispatch(Actions.SignOut.onSignOut())
  }

  render() {
    return (
      <DashboardContainer>
        <PanelOptions />
      </DashboardContainer>
    )
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user
})

export const DashboardLayout = connect(mapStateToProps)(Dashboard)
