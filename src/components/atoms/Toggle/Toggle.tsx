import { Feature } from '@paralleldrive/react-feature-toggles'
import * as classNames from 'classnames'
import { Tootip } from 'components/atoms/Tooltip/Tooltip'
import { Images } from 'images/Images'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './Toggle.scss'

interface ToggleProps extends ClassNameProps {}

const TestToggle = () => (
  <Tootip
    className={'Toggle__tooltip'}
    element={<img className={'Toggle__image'} src={Images.Toogle} />}
    tooltipText={`Frost is currently only timestamping to testnet — mainnet timestamping is unavailable.`}
  />
)

const MainToggle = () => (
  <Tootip
    className={'Toggle__tooltip'}
    element={<img className={'Toggle__image'} src={Images.Toogle} />}
    tooltipText={`Frost is currently only timestamping to mainnet — testnet timestamping is unavailable.`}
  />
)

export const Toggle = (props: ToggleProps) => (
  <div className={classNames('Toggle d-flex align-items-center', props.className)}>
    <p className={'Toggle__text'}>Testnet</p>
    <Feature name="mainnet" inactiveComponent={TestToggle} activeComponent={MainToggle} />
    <p className={'Toggle__text'}>Livenet</p>
  </div>
)
