import { Actions } from 'actions'
import { Logout } from 'components/atoms/Logout/Logout'
import { FrostState, User } from 'interfaces/Props'
import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'

interface LogoutContainerProps {
  readonly user: User
  readonly onSignOut?: () => Action
}

const mapStateToProps = (state: FrostState): LogoutContainerProps => ({
  user: state.user,
})

const mapDispatch = {
  onSignOut: Actions.SignOut.onSignOut,
}

export const LogoutContainer = connect(
  mapStateToProps,
  mapDispatch
)(
  class extends React.Component<LogoutContainerProps, undefined> {
    render(): JSX.Element {
      const { user, onSignOut } = this.props
      const { profile } = user

      return <Logout email={profile.email} onLogout={onSignOut} />
    }
  }
)
