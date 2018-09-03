import { Actions } from 'actions'
import { CreateToken } from 'components/molecules/CreateToken/CreateToken'
import { FrostState, StatusService, User, ModalState } from 'interfaces/Props'
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
  readonly onShowModal?: (payload: { readonly modal: string; readonly data: object }) => Action
  readonly onHideModal?: () => Action
  readonly onDeleteApiToken?: (payload: { readonly token: string; readonly apiToken: string }) => Action
  readonly modal: ModalState
  readonly deleteApiToken: StatusService
}

const mapStateToProps = (state: FrostState): CreateTokenContainerProps => ({
  user: state.user,
  sendEmailVerifiedAccount: state.sendEmailVerifiedAccount,
  createApiTokens: state.createApiTokens,
  modal: state.modal,
  deleteApiToken: state.deleteApiToken,
})

const { onCreateApiToken } = Actions.ApiTokens
const { onSendEmailVerifiedAccount } = Actions.SendEmailVerifiedAccount
const { onDeleteApiToken } = Actions.DeleteApiToken
const { onShowModal, onHideModal } = Actions.Modal
const mapDispatch = {
  onCreateApiToken,
  onSendEmailVerifiedAccount,
  onDeleteApiToken,
  onShowModal,
  onHideModal,
}
const MODAL_DELETE_TOKEN = 'MODAL_DELETE_TOKEN'

const deleteToken = (
  modal: ModalState,
  onDeleteApiToken: (payload: { readonly token: string; readonly apiToken: string }) => Action,
  user: User
) => {
  const { apiToken } = modal.data as { readonly apiToken: string }
  const { token } = user
  onDeleteApiToken({ token, apiToken })
}

const createToken = (props: CreateTokenContainerProps): JSX.Element => (
  <CreateToken
    boxToken={props.user.profile.apiTokens}
    showVerifiedAccount={props.user.profile.verified}
    sendEmailVarifiedAccount={() => props.onSendEmailVerifiedAccount({ token: props.user.token })}
    retryWait={props.sendEmailVerifiedAccount.retryWait}
    onCreateApiToken={() => props.onCreateApiToken({ token: props.user.token })}
    submitDisabled={props.createApiTokens.loading}
    onDeleteToken={() => deleteToken(props.modal, props.onDeleteApiToken, props.user)}
    onShowModal={(apiToken: string) => props.onShowModal({ modal: MODAL_DELETE_TOKEN, data: { apiToken } })}
    onCloseModal={() => props.onHideModal()}
    showDeleteModal={props.modal.modal === MODAL_DELETE_TOKEN}
    disabledButton={props.deleteApiToken.loading}
  />
)

export const CreateTokenContainer = connect(
  mapStateToProps,
  mapDispatch
)(createToken)
