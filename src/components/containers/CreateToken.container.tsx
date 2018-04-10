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
  readonly onCreateApiToken?: (data: DataAction) => Action
}

const mapStateToProps = (state: FrostState): CreateTokenContainerProps => ({
  user: state.user,
  sendEmailVerifiedAccount: state.sendEmailVerifiedAccount
})

const mapDispatch = {
  onCreateApiToken: Actions.ApiTokens.onCreateApiToken,
  onSendEmailVerifiedAccount:
    Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccount
}

const sendEmailVarifiedAccount = (
  dispath: (data: object) => Action,
  { token }: User
): void => {
  dispath({ token })
}

const onCreateApiToken = (
  dispath: (data: object) => Action,
  { token }: User
): void => {
  dispath({ token })
}

const createToken = (props: CreateTokenContainerProps): JSX.Element => (
  <CreateToken
    boxToken={props.user.profile.apiTokens}
    showVerifiedAccount={props.user.profile.verified}
    sendEmailVarifiedAccount={() =>
      sendEmailVarifiedAccount(props.onSendEmailVerifiedAccount, props.user)
    }
    retryWait={props.sendEmailVerifiedAccount.retryWait}
    onCreateApiToken={() =>
      onCreateApiToken(props.onCreateApiToken, props.user)
    }
  />
)

export const CreateTokenContainer = connect(mapStateToProps, mapDispatch)(
  createToken
)
