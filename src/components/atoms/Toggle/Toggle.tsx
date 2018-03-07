import * as classNames from 'classnames'
import * as React from 'react'
import { Images } from '../../../images/Images'
import { ClassNameProps } from '../../../interfaces/Props'
import { Tootip } from '../Tooltip/Tooltip'
import './Toggle.scss'

interface ToggleProps extends ClassNameProps {}

export const Toggle = (props: ToggleProps) => (
  <div
    className={classNames('Toggle d-flex align-items-center', props.className)}
  >
    <p className={'Toggle__text'}>Testnet</p>
    <Tootip
      className={'Toggle__tooltip'}
      element={<img className={'Toggle__image'} src={Images.Toogle} />}
      tooltipText={`Frost is currently only timestamping to testnet — mainnet timestamping is unavailable.`}
    />

    <p className={'Toggle__text'}>Livenet</p>
  </div>
)
