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
  readonly createApiTokens: StatusService
  readonly onSendEmailVerifiedAccount?: (data: DataAction) => Action
  readonly onCreateApiToken?: (data: DataAction) => Action
}

const mapStateToProps = (state: FrostState): CreateTokenContainerProps => ({
  user: state.user,
  sendEmailVerifiedAccount: state.sendEmailVerifiedAccount,
  createApiTokens: state.createApiTokens
})

const { onCreateApiToken } = Actions.ApiTokens
const { onSendEmailVerifiedAccount } = Actions.SendEmailVerifiedAccount
const mapDispatch = { onCreateApiToken, onSendEmailVerifiedAccount }

const createToken = (props: CreateTokenContainerProps): JSX.Element => (
  <CreateToken
    boxToken={props.user.profile.apiTokens}
    showVerifiedAccount={props.user.profile.verified}
    sendEmailVarifiedAccount={() =>
      props.onSendEmailVerifiedAccount({ token: props.user.token })
    }
    retryWait={props.sendEmailVerifiedAccount.retryWait}
    onCreateApiToken={() => props.onCreateApiToken({ token: props.user.token })}
    submitDisabled={props.createApiTokens.loading}
  />
)

export const CreateTokenContainer = connect(mapStateToProps, mapDispatch)(
  createToken
)
