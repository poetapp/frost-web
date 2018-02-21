import * as PropTypes from 'prop-types'
import * as React from 'react'
import { connect } from 'react-redux'
import { Actions } from '../../../actions'
import { DashboardContainer } from '../../containers/Dashboard.container'
import { CreateToken } from '../../molecules/CreateToken/CreateToken'
const ProgressBar = require('react-progress-bar-plus')

export class Token extends React.Component<any, any> {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.sendEmailVarifiedAccount = this.sendEmailVarifiedAccount.bind(this)
  }

  sendEmailVarifiedAccount() {
    const { store } = this.context
    const { user } = this.props
    const { token } = user
    store.dispatch(
      Actions.SendEmailVerifiedAccount.onSendEmailVerifiedAccount({ token })
    )
  }

  render() {
    const { user, loadingPage, sendEmailVerifiedAccount } = this.props
    const { profile } = user
    const { loading, percentage } = loadingPage
    const { retryWait } = sendEmailVerifiedAccount

    return (
      <DashboardContainer>
        {loading ? <ProgressBar autoIncrement percent={percentage} /> : null}
        <CreateToken
          boxToken={profile.apiToken}
          showVerifiedAccount={profile.verified}
          sendEmailVarifiedAccount={this.sendEmailVarifiedAccount}
          retryWait={retryWait}
        />
      </DashboardContainer>
    )
  }
}

const mapStateToProps = (state: any) => ({
  loadingPage: state.loadingPage,
  user: state.user,
  sendEmailVerifiedAccount: state.sendEmailVerifiedAccount
})

export const TokenLayout = connect(mapStateToProps)(Token)
