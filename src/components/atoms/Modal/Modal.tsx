import * as React from 'react'
import { CloseModal } from './CloseModal'
import './Modal.scss'
import { Overlay } from './Overlay'

interface ModalProps {
  readonly onClose: () => void
  readonly children?: JSX.Element
  readonly show: boolean
}

export const Modal = (props: ModalProps) => (
  <Overlay show={props.show}>
    <div className={'Modal'}>
      <CloseModal onClose={props.onClose} />
      {props.children}
    </div>
  </Overlay>
)
