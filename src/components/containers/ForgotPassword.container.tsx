import { Actions } from 'actions'
import { ForgotPassword } from 'components/molecules/Forms/ForgotPassword/ForgotPassword'
import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'

interface DataForm {
  readonly email: string
}

interface ForgotPasswordContainerProps {
  readonly onForgotPassword?: (data: DataForm) => Action
}

const mapDispatch = {
  onForgotPassword: Actions.ForgotPassword.onForgotPassword,
}

export const ForgotPasswordContainer = connect(undefined, mapDispatch)(
  class extends React.Component<ForgotPasswordContainerProps, undefined> {
    readonly onForgotPassword = (data: DataForm, elements: { readonly [key: string]: HTMLInputElement }): void => {
      const { onForgotPassword } = this.props
      const { email } = elements
      onForgotPassword(data)
      email.setAttribute('value', '')
    }

    render(): JSX.Element {
      return <ForgotPassword onSubmit={this.onForgotPassword} />
    }
  },
)
