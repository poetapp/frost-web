import * as classNames from 'classnames'
import * as React from 'react'
import { Images } from '../../../images/Images'
import './Toggle.scss'

interface ToggleProps {
  readonly className?: string
}

export const Toggle = (props: ToggleProps) => (
  <div
    className={classNames('Toggle d-flex align-items-center', props.className)}
  >
    <p className={'Toggle__text'}>Testnet</p>
    <img className={'Toggle__image'} src={Images.Toogle} />
    <p className={'Toggle__text'}>Livenet</p>
  </div>
)
