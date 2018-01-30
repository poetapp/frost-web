import * as classNames from 'classnames'
import * as React from 'react'
import './Tooltip.scss'

interface TootipProps {
  readonly element?: any
  readonly tooltipText?: string
  readonly className?: string
}

export const Tootip = (props: TootipProps) => (
  <div className={classNames('Tooltip', props.className)}>
    {props.element}
    <span className="Tooltip__tooltiptext">{props.tooltipText}</span>
  </div>
)
