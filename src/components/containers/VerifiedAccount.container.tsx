import { Actions } from 'actions'
import { VerifiedAccount } from 'components/molecules/VerifiedAccount/VerifiedAccount'
import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Action } from 'redux'

interface DataAction {
  readonly token: string
}

interface VerifiedAccountContainerProps {
  readonly onVerifiedAccount?: (data: DataAction) => Action
}

const mapDispatch = {
  onVerifiedAccount: Actions.VerifiedAccount.onVerifiedAccount
}

export const VerifiedAccountContainer = connect(undefined, mapDispatch)(
  class extends React.Component<VerifiedAccountContainerProps, undefined> {
    componentDidMount(): void {
      const { onVerifiedAccount } = this.props
      const currentLocation = browserHistory.getCurrentLocation()
      const { token } = currentLocation.query
      onVerifiedAccount({ token })
    }

    render(): JSX.Element {
      return <VerifiedAccount />
    }
  }
)
