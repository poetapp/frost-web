import { Actions } from 'actions'
import { CreateToken } from 'components/molecules/CreateToken/CreateToken'
import { FrostState, StatusService, User } from 'interfaces/Props'
import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'

interface DataAction {
  readonly token: string
}

interface CreateTokenContainerProps {
  readonly user: User
  readonly sendEmailVerifiedAccount: StatusService
  readonly onSendEmailVerifiedAccount?: (data: DataAction) => Action
}

const mapStateToProps = (state: FrostState): CreateTokenContainerProps => ({
  user: state.user,
  sendEmailVerifiedAccount: state.sendEmailVerifiedAccount
})

const mapDispatch = {
  onSendEmailVerifiedAccount:
    Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccount
}

export const CreateTokenContainer = connect(mapStateToProps, mapDispatch)(
  class extends React.Component<CreateTokenContainerProps, undefined> {
    constructor() {
      super()
      this.sendEmailVarifiedAccount = this.sendEmailVarifiedAccount.bind(this)
    }

    sendEmailVarifiedAccount(): void {
      const { onSendEmailVerifiedAccount, user } = this.props
      const { token } = user
      onSendEmailVerifiedAccount({ token })
    }

    render(): JSX.Element {
      const { user, sendEmailVerifiedAccount } = this.props
      const { profile } = user
      const { retryWait } = sendEmailVerifiedAccount

      return (
        <CreateToken
          boxToken={profile.apiTokens}
          showVerifiedAccount={profile.verified}
          sendEmailVarifiedAccount={this.sendEmailVarifiedAccount}
          retryWait={retryWait}
        />
      )
    }
  }
)
