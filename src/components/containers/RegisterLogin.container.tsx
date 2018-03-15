import { Actions } from 'actions'
import { FrostState, StatusService } from 'interfaces/Props'
import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'

import { RegisterLogin } from 'components/molecules/RegisterLogin/RegisterLogin'

interface DataFormSignIn {
  email: string
  password: string
}

interface DataFormSignUp extends DataFormSignIn {
  confirmPassword: string
}

interface RegisterLoginContainerProps {
  readonly onSubmitSignUp?: (data: DataFormSignUp) => Action
  readonly onSubmitSignIn?: (data: DataFormSignIn) => Action
  readonly signIn: StatusService
  readonly signUp: StatusService
}

const mapStateToProps = (state: FrostState): RegisterLoginContainerProps => ({
  signIn: state.signIn,
  signUp: state.signUp
})

const mapDispatch = {
  onSubmitSignUp: Actions.SignUp.onSignUp,
  onSubmitSignIn: Actions.SignIn.onSignIn
}

export const RegisterLoginContainer = connect(mapStateToProps, mapDispatch)(
  class extends React.Component<RegisterLoginContainerProps, undefined> {
    constructor() {
      super()
      this.onSubmitSignUp = this.onSubmitSignUp.bind(this)
      this.onSubmitSignIn = this.onSubmitSignIn.bind(this)
    }

    onSubmitSignUp(data: DataFormSignUp) {
      const { onSubmitSignUp } = this.props
      onSubmitSignUp(data)
    }

    onSubmitSignIn(data: DataFormSignIn) {
      const { onSubmitSignIn } = this.props
      onSubmitSignIn(data)
    }

    render() {
      const { signIn, signUp } = this.props

      return (
        <RegisterLogin
          onSubmitSignUp={this.onSubmitSignUp}
          onSubmitSignIn={this.onSubmitSignIn}
          signUp={signUp}
          signIn={signIn}
        />
      )
    }
  }
)
