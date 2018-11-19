import { Button } from 'components/atoms/Button/Button'
import { Modal } from 'components/molecules/Modal/Modal'
import * as React from 'react'
import './DeleteToken.scss'

interface DeleteTokenProps {
  readonly onDeleteToken: (event: React.SyntheticEvent) => void
  readonly show: boolean
  readonly onClose: () => void
  readonly disabledButton: boolean
}

export const DeleteToken = (props: DeleteTokenProps) => (
  <Modal show={props.show} onClose={props.onClose}>
    <div className={'DeleteToken'}>
      <header>
        <h2 className={'DeleteToken__title'}>Are you sure you want to delete this token?</h2>
      </header>
      <main>
        <p className={'DeleteToken__text'}>
          Any applications or scripts using this token will no longer be able to access the Po.et API. You cannot undo
          this action.
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
