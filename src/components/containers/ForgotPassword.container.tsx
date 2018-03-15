import { Actions } from 'actions'
import { ForgotPassword } from 'components/molecules/Forms/ForgotPassword/ForgotPassword'
import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'

interface DataForm {
  email: string
}

interface ForgotPasswordContainerProps {
  readonly onForgotPassword?: (data: DataForm) => Action
}

const mapDispatch = {
  onForgotPassword: Actions.ForgotPassword.onForgotPassword
}

export const ForgotPasswordContainer = connect(undefined, mapDispatch)(
  class extends React.Component<ForgotPasswordContainerProps, undefined> {
    constructor() {
      super()
      this.onForgotPassword = this.onForgotPassword.bind(this)
    }

    onForgotPassword(data: DataForm, elements: any) {
      const { onForgotPassword } = this.props
      const { email } = elements
      onForgotPassword(data)
      email.value = ''
    }

    render() {
      return <ForgotPassword onSubmit={this.onForgotPassword} />
    }
  }
)
