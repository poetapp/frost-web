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
  readonly onShowModal?: (payload: { readonly modal: string }) => Action
  readonly onHideModal?: () => Action
  readonly modal: ModalState
}

const mapStateToProps = (state: FrostState): CreateTokenContainerProps => ({
  user: state.user,
  sendEmailVerifiedAccount: state.sendEmailVerifiedAccount,
  modal: state.modal
})
const { onSendEmailVerifiedAccount } = Actions.SendEmailVerifiedAccount
const { onShowModal, onHideModal } = Actions.Modal
const mapDispatch = {
  onSendEmailVerifiedAccount,
  onShowModal,
  onHideModal
}

export const CreateTokenContainer = connect(mapStateToProps, mapDispatch)(
  class extends React.Component<CreateTokenContainerProps, undefined> {
    readonly sendEmailVarifiedAccount = (): void => {
      const { onSendEmailVerifiedAccount, user } = this.props
      const { token } = user
      onSendEmailVerifiedAccount({ token })
    }

    readonly onDeleteToken = () => {
      const { onShowModal } = this.props
      onShowModal({ modal: 'deleteToken' })
    }

    readonly onClose = () => {
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
          showDeleteModal={modal.modal === 'deleteToken'}
          onCloseModal={this.onClose}
        />
      )
    }
  }
)
