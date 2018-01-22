import * as PropTypes from 'prop-types'
import * as React from 'react'
import { connect } from 'react-redux'
import { Actions } from '../../actions'
import { Logout } from '../atoms/Logout/Logout'

export class LogoutExtended extends React.Component<any, undefined> {
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
    const { user } = this.props
    const { email } = user

    return <Logout email={email} onLogout={this.onLogout} />
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user
})

export const LogoutContainer = connect(mapStateToProps)(LogoutExtended)
