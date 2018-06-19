import * as classNames from 'classnames'
import * as React from 'react'
import { ReactNode } from 'react'

import './Overlay.scss'

interface OverlayProps {
  readonly children?: ReactNode
  readonly show: boolean
}

export const Overlay = (props: OverlayProps) => (
  <div className={classNames('Overlay', `Overlay__${props.show ? 'show' : 'hide'}`)}>
    <div className={'Overlay__back'} />
    <div className={'Overlay__front'}>
      <div className={'Overlay__front__content'}>{props.children}</div>
    </div>
  </div>
)
