import * as React from 'react'

import * as classNames from 'classnames'
import { ToggleRP } from 'components/atoms/ToggleRP/ToggleRP'
import { ClassNameProps } from 'interfaces/Props'
import './ToggleMainnet.scss'

interface ToggleMainnetProps extends ClassNameProps {
  readonly disabled?: boolean
}

export const ToggleMainnet = (props: ToggleMainnetProps) => (
  <div className={classNames('ToggleMainnet', props.className)}>
    <span className={'ToggleMainnet__toggle-text'}>Testnet</span>
    <ToggleRP className={'ToggleMainnet__toggle'} disabled={props.disabled} />
    <span className={'ToggleMainnet__toggle-text'}>Mainnet</span>
  </div>
)
