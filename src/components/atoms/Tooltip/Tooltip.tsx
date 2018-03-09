import * as classNames from 'classnames'
import 'components/atoms/Tooltip/Tooltip.scss'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

interface TootipProps extends ClassNameProps {
  readonly element?: any
  readonly tooltipText?: string
}

export const Tootip = (props: TootipProps) => (
  <div className={classNames('Tooltip', props.className)}>
    {props.element}
    <span className="Tooltip__tooltiptext">{props.tooltipText}</span>
  </div>
)
