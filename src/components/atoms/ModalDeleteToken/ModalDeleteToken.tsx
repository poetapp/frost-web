import { Button } from 'components/atoms/Button/Button'
import { Modal } from 'components/atoms/Modal/Modal'
import * as React from 'react'
import './ModalDeleteToken.scss'

interface ModalDeleteTokenProps {
  readonly onDeleteToken: (event: Event) => void
  readonly show: boolean
  readonly onClose: () => void
  readonly disabledButton: boolean
}

export const ModalDeleteToken = (props: ModalDeleteTokenProps) => (
  <Modal show={props.show} onClose={props.onClose}>
    <div className={'ModalDeleteToken'}>
      <header>
        <h2 className={'ModalDeleteToken__title'}>
          Are you sure you want to delete this token?
        </h2>
      </header>
      <main>
        <p className={'ModalDeleteToken__text'}>
          Any applications or scripts using this token will no longer be able to
          access the Frost API. You cannot undo this action.
        </p>
      </main>
      <footer>
        <Button
          text={'I understand, delete this token'}
          type={'danger'}
          onClick={props.onDeleteToken}
          disabled={props.disabledButton}
        />
      </footer>
    </div>
  </Modal>
)
