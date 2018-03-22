import { Actions } from 'actions'
import { ChangePassword } from 'components/molecules/Forms/ChangePassword/ChangePassword'
import { FrostState, StatusService, Router } from 'interfaces/Props'
import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Action } from 'redux'

interface DataForm {
  readonly password: string
  readonly confirmPassword: string
}

interface DataAction extends DataForm {
  readonly token: string
}

interface ChangePasswordContainerProps {
  readonly changePasswordToken: StatusService
  readonly onChangePassword?: (data: DataAction) => Action
}

const mapStateToProps = (state: FrostState): ChangePasswordContainerProps => ({
  changePasswordToken: state.changePasswordToken
})

const mapDispatch = {
  onChangePassword: Actions.ChangePasswordToken.onChangePassword
}

export const ChangePasswordContainer = connect(mapStateToProps, mapDispatch)(
  class extends React.Component<
    ChangePasswordContainerProps & Router,
    undefined
  > {
    constructor() {
      super()
      this.onChangePassword = this.onChangePassword.bind(this)
    }
    onChangePassword(data: DataForm) {
      const { onChangePassword } = this.props
      const currentLocation = browserHistory.getCurrentLocation()
      const { token } = currentLocation.query
      onChangePassword({ ...data, token })
    }
    render() {
      const { changePasswordToken } = this.props

      return (
        <ChangePassword
          onSubmit={this.onChangePassword}
          disabledButton={changePasswordToken.loading}
        />
      )
    }
  }
)
