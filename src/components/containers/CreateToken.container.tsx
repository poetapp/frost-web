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
  readonly onSendEmailVerifiedAccount?: (data: DataAction) => Action
  readonly onShowModal?: (
    payload: { readonly modal: string; readonly data: object }
  ) => Action
  readonly onHideModal?: () => Action
  readonly onDeleteApiToken?: (
    payload: { readonly token: string; readonly apiToken: string }
  ) => Action
  readonly modal: ModalState
}

const mapStateToProps = (state: FrostState): CreateTokenContainerProps => ({
  user: state.user,
  sendEmailVerifiedAccount: state.sendEmailVerifiedAccount,
  modal: state.modal
})
const { onSendEmailVerifiedAccount } = Actions.SendEmailVerifiedAccount
const { onShowModal, onHideModal } = Actions.Modal
const { onDeleteApiToken } = Actions.DeleteApiToken
const mapDispatch = {
  onSendEmailVerifiedAccount,
  onShowModal,
  onHideModal,
  onDeleteApiToken
}

const MODAL_DELETE_TOKEN = 'MODAL_DELETE_TOKEN'

export const CreateTokenContainer = connect(mapStateToProps, mapDispatch)(
  class extends React.Component<CreateTokenContainerProps, undefined> {
    readonly sendEmailVarifiedAccount = (): void => {
      const { onSendEmailVerifiedAccount, user } = this.props
      const { token } = user
      onSendEmailVerifiedAccount({ token })
    }

    readonly onDeleteToken = () => {
      const { modal, onDeleteApiToken, user } = this.props
      const { apiToken } = modal.data as { readonly apiToken: string }
      const { token } = user
      onDeleteApiToken({ token, apiToken })
    }

    readonly onShowModal = (apiToken: string) => {
      const { onShowModal } = this.props
      onShowModal({ modal: MODAL_DELETE_TOKEN, data: { apiToken } })
    }

    readonly onCloseModal = () => {
      const { onHideModal } = this.props
      onHideModal()
    }

    render(): JSX.Element {
      const { user, sendEmailVerifiedAccount, modal } = this.props
      const { profile } = user
      const { retryWait } = sendEmailVerifiedAccount

      return (
        <CreateToken
          boxToken={profile.apiTokens}
          showVerifiedAccount={profile.verified}
          sendEmailVarifiedAccount={this.sendEmailVarifiedAccount}
          retryWait={retryWait}
          onDeleteToken={this.onDeleteToken}
          onShowModal={this.onShowModal}
          onCloseModal={this.onCloseModal}
          showDeleteModal={modal.modal === MODAL_DELETE_TOKEN}
        />
      )
    }
  }
)
