import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Action } from 'redux'
import { Actions } from '../../actions'
import { VerifiedAccount } from '../molecules/VerifiedAccount/VerifiedAccount'

interface DataAction {
  token: string
}

interface VerifiedAccountContainerProps {
  readonly onVerifiedAccount?: (data: DataAction) => Action
}

const mapDispatch = {
  onVerifiedAccount: Actions.VerifiedAccount.onVerifiedAccount
}

export const VerifiedAccountContainer = connect(undefined, mapDispatch)(
  class extends React.Component<VerifiedAccountContainerProps, undefined> {
    componentDidMount() {
      const { onVerifiedAccount } = this.props
      const currentLocation = browserHistory.getCurrentLocation()
      const { token } = currentLocation.query
      onVerifiedAccount({ token })
    }

    render() {
      return <VerifiedAccount />
    }
  }
)
