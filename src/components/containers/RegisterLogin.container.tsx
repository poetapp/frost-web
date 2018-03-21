import { Actions } from 'actions'
import { FrostState, StatusService } from 'interfaces/Props'
import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'
const { toast } = require('react-toastify')

import { RegisterLogin } from 'components/molecules/RegisterLogin/RegisterLogin'

interface DataFormSignIn {
  readonly email: string
  readonly password: string
}

interface DataFormSignUp extends DataFormSignIn {
  readonly confirmPassword: string
}

interface RegisterLoginContainerProps {
  readonly onSubmitSignUp?: (data: DataFormSignUp) => Action
  readonly onSubmitSignIn?: (
    data: DataFormSignIn,
    resolve: any,
    reject: any
  ) => Action
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

    onSubmitSignUp(data: DataFormSignUp, elements: any, form: any) {
      const { onSubmitSignUp } = this.props
      const html = { elements, form }
      const dataForm = { ...data, html }
      onSubmitSignUp(dataForm)
    }

    showUIErrors(error: string, elements: any, form: any) {
      if (error.includes('The specified resource does not exist.')) {
        elements.email.setCustomValidity(error)
        elements.email.focus()
      } else
        toast.error(error, {
          className: 'toast',
          autoClose: 2500
        })

      form.reportValidity()
    }

    onSubmitSignIn(data: DataFormSignIn, elements: any, form: any) {
      const { onSubmitSignIn } = this.props

      new Promise((resolve, reject) =>
        onSubmitSignIn(data, resolve, reject)
      ).catch((e: string) => this.showUIErrors(e, elements, form))
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
