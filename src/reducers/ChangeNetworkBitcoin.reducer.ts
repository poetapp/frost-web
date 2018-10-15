import { Actions } from 'actions'
import { Network } from 'interfaces/Props'
const { onChangeNetwork } = Actions.ToogleNetworkBitcoin

export const defaultState = {
  network: Network.TEST,
}

export const changeNetworkBitcoin = (state: any = defaultState, action: any = {}) => {
  switch (action.type) {
    case onChangeNetwork().type:
      return {
        ...state,
        network: action.payload,
      }
  }

  return state
}
