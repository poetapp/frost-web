import * as classNames from 'classnames'
import * as React from 'react'
import './CloseButton.scss'

interface CloseButtonProps {
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

export const CloseButton = (props: CloseButtonProps) => (
  <button
    className={classNames('CloseButton', props.className)}
    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
      onClose(e, props.onClose)
    }
  >
    &#10006;
  </button>
)
