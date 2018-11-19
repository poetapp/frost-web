import * as classNames from 'classnames'
import { Tootip } from 'components/atoms/Tooltip/Tooltip'
import { Images } from 'images/Images'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './Toggle.scss'

interface ToggleProps extends ClassNameProps {}

export const Toggle = (props: ToggleProps) => (
  <div className={classNames('Toggle d-flex align-items-center', props.className)}>
    <p className={'Toggle__text'}>Testnet</p>
    <Tootip
      className={'Toggle__tooltip'}
      element={<img className={'Toggle__image'} src={Images.Toogle} />}
      tooltipText={`Po.et Api is currently only timestamping to testnet — mainnet timestamping is unavailable.`}
    />
    <p className={'Toggle__text'}>Livenet</p>
  </div>
)
