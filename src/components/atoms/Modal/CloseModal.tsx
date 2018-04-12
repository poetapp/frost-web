import * as classNames from 'classnames'
import * as React from 'react'
import './CloseModal.scss'

interface CloseModalProps {
  readonly onClose: () => void
  readonly className?: string
}

const onClose = (
  event: React.MouseEvent<HTMLButtonElement>,
  onClose: () => void
) => {
  event.preventDefault()
  onClose()
}

export const CloseModal = (props: CloseModalProps) => (
  <button
    className={classNames('CloseModal', props.className)}
    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
      onClose(e, props.onClose)
    }
  >
    &#10006;
  </button>
)
