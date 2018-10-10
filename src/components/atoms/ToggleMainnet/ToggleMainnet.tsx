import * as React from 'react'

import * as classNames from 'classnames'
import { ToggleRP } from 'components/atoms/ToggleRP/ToggleRP'
import { ClassNameProps, Network } from 'interfaces/Props'
import './ToggleMainnet.scss'

interface ToggleMainnetProps extends ClassNameProps {
  readonly disabled?: boolean
  readonly on?: boolean
  readonly onToogle?: (network: Network) => void
}

export const isNetworkLive = (enabledLive: boolean) => (enabledLive ? Network.LIVE : Network.TEST)

const onToogle = (event: Event, callback: (network: Network) => void) => {
  const checkbox = event.target as HTMLInputElement
  callback(isNetworkLive(checkbox.checked))
}

export const ToggleMainnet = (props: ToggleMainnetProps) => (
  <div className={classNames('ToggleMainnet', props.className)}>
    <span className={'ToggleMainnet__toggle-text'}>Testnet</span>
    <ToggleRP
      className={'ToggleMainnet__toggle'}
      disabled={props.disabled}
      on={props.on}
      onClick={(e: Event): void => onToogle(e, props.onToogle)}
    />
    <span className={'ToggleMainnet__toggle-text'}>Mainnet</span>
  </div>
)
