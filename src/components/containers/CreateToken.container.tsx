import { getCurrentActiveFeatureNames, isActiveFeatureName } from '@paralleldrive/feature-toggles'
import { ifElse, identity, always } from 'ramda'
import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'

import { Actions } from 'actions'
import { CreateToken } from 'components/molecules/CreateToken/CreateToken'
import { initialFeatures, FeatureName } from 'config/features'
import { parseJwt } from 'helpers'
import { FrostState, StatusService, User, ModalState, Network, ApiTokens, WorkAttributes } from 'interfaces/Props'

interface DataAction {
  readonly token: string
}

interface CreateTokenContainerProps {
  readonly user: User
  readonly apiTokens: ApiTokens
  readonly sendEmailVerifiedAccount: StatusService
  readonly createApiTokens: StatusService
  readonly onSendEmailVerifiedAccount?: (data: DataAction) => Action
  readonly onCreateApiToken?: (data: { readonly token: string; readonly network: Network }) => Action
  readonly onPostWork?: (data: { readonly token: string; readonly work: WorkAttributes }) => Action
  readonly onShowModal?: (payload: { readonly modal: string; readonly data: object }) => Action
  readonly onHideModal?: () => Action
  readonly onDeleteApiToken?: (payload: { readonly token: string; readonly apiToken: string }) => Action
  readonly modal: ModalState
  readonly deleteApiToken: StatusService
  readonly network: Network
}

const mapStateToProps = (state: FrostState): CreateTokenContainerProps => ({
  user: state.user,
  apiTokens: state.apiTokens,
  sendEmailVerifiedAccount: state.sendEmailVerifiedAccount,
  createApiTokens: state.createApiTokens,
  modal: state.modal,
  deleteApiToken: state.deleteApiToken,
  network: state.changeNetworkBitcoin.network,
})

const { onCreateApiToken, onDeleteApiToken } = Actions.ApiTokens
const { onSendEmailVerifiedAccount } = Actions.SendEmailVerifiedAccount
const { onShowModal, onHideModal } = Actions.Modal
const { onPostWork } = Actions.PostWork
const mapDispatch = {
  onCreateApiToken,
  onSendEmailVerifiedAccount,
  onDeleteApiToken,
  onShowModal,
  onHideModal,
  onPostWork,
}
const MODAL_DELETE_TOKEN = 'MODAL_DELETE_TOKEN'

const deleteToken = (
  modal: ModalState,
  onDeleteApiToken: (payload: { readonly token: string; readonly apiToken: string }) => Action,
  user: User,
) => {
  const { apiToken } = modal.data as { readonly apiToken: string }
  const { token } = user
  onDeleteApiToken({ token, apiToken })
}

const getApiTokenByNetwork = (network: Network) => (apiTokens: ReadonlyArray<string>): ReadonlyArray<string> =>
  apiTokens.filter((apiToken: string) => parseJwt(apiToken).network === network)

export const capitalize = ([first, ...rest]: string) => first.toUpperCase() + rest.join('').toLowerCase()
const isActiveToggleNetwork = () =>
  isActiveFeatureName(FeatureName.ToggleNetwork, getCurrentActiveFeatureNames({ initialFeatures }))
export const getTextButtonByNetwork = (network: Network) => `Create API Token for ${capitalize(network)}`
export const getTextButton = () => 'Create API Token'
const getTextCreateTokenButton = (network: Network) =>
  ifElse(isActiveToggleNetwork, getTextButtonByNetwork, getTextButton)(network)
const getNetworkByFT = (network: Network) => ifElse(isActiveToggleNetwork, identity, always(undefined))(network)

const createToken = (props: CreateTokenContainerProps): JSX.Element => (
  <CreateToken
    boxToken={getApiTokenByNetwork(props.network)(props.apiTokens.tokens)}
    showVerifiedAccount={props.user.profile.verified}
    sendEmailVarifiedAccount={() => props.onSendEmailVerifiedAccount({ token: props.user.token })}
    retryWait={props.sendEmailVerifiedAccount.retryWait}
    onCreateApiToken={() => props.onCreateApiToken({ token: props.user.token, network: getNetworkByFT(props.network) })}
    submitDisabled={props.createApiTokens.loading}
    onDeleteToken={() => deleteToken(props.modal, props.onDeleteApiToken, props.user)}
    onShowModal={(apiToken: string) => props.onShowModal({ modal: MODAL_DELETE_TOKEN, data: { apiToken } })}
    onCloseModal={() => props.onHideModal()}
    showDeleteModal={props.modal.modal === MODAL_DELETE_TOKEN}
    disabledButton={props.deleteApiToken.loading}
    network={props.network}
    textCreateTokenButton={getTextCreateTokenButton(props.network)}
    email={props.user.profile.email}
    onPostWork={(data: WorkAttributes) => props.onPostWork({
      token: getApiTokenByNetwork(props.network)(props.apiTokens.tokens)[0],
      work: data,
    })}
  />
)

export const CreateTokenContainer = connect(mapStateToProps, mapDispatch)(createToken)
