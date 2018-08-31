import { Actions } from 'actions'
import { ToggleMainnet } from 'components/atoms/ToggleMainnet/ToggleMainnet'
import { FrostState, Network } from 'interfaces/Props'
import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'

interface ToggleNetworkContainerProps {
  readonly onChangeNetwork?: (payload: Network) => Action
  readonly network: Network
}

const mapDispatch = {
  onChangeNetwork: Actions.ToogleNetworkBitcoin.onChangeNetwork,
}

const mapStateToProps = (state: FrostState): ToggleNetworkContainerProps => ({
  ...state.changeNetworkBitcoin,
})

export const ToggleNetworkContainer = connect(mapStateToProps, mapDispatch)(
  class extends React.Component<ToggleNetworkContainerProps, undefined> {
    readonly onChangeNetwork = (network: Network): void => {
      const { onChangeNetwork } = this.props
      onChangeNetwork(network)
    }

    render(): JSX.Element {
      const { network } = this.props
      const on = network === Network.MAINNET
      return <ToggleMainnet disabled={false} on={on} onToogle={this.onChangeNetwork} />
    }
  }
)
