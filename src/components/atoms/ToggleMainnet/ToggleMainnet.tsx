import * as React from 'react'

import * as classNames from 'classnames'
import { ToggleRP } from 'components/atoms/ToggleRP/ToggleRP'
import { ClassNameProps } from 'interfaces/Props'

interface ToggleMainnetProps extends ClassNameProps {
  readonly disabled?: boolean
}

export const ToggleMainnet = (props: ToggleMainnetProps) => {
  return (
    <div className={classNames('ToggleMainnet', props.className)}>
      <span id={'mainnet-toggle'} className={'ToggleText'}>
        Mainnet
      </span>
      <ToggleRP disabled={props.disabled} labelledby={'mainnet-toggle'} />
      <span className={'ToggleText'}>Testnet</span>
    </div>
  )
}
