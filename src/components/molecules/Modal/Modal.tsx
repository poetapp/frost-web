import { CloseButton } from 'components/atoms/CloseButton/CloseButton'
import { Overlay } from 'components/atoms/Overlay/Overlay'
import * as React from 'react'
import { ReactNode } from 'react'
import './Modal.scss'

interface ModalProps {
  readonly onClose: () => void
  readonly children?: ReactNode
  readonly show: boolean
}

export const Modal = (props: ModalProps) => (
  <Overlay show={props.show}>
    <div className={'Modal'}>
      <CloseButton onClose={props.onClose} />
      {props.children}
    </div>
  </Overlay>
)
