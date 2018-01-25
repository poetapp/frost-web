import * as classNames from 'classnames'
import * as React from 'react'
import { Button } from '../Button/Button'
import './BoxButton.scss'

interface BoxButtonProps {
  readonly className?: string
  readonly title?: string
  readonly description?: string
  readonly buttonText?: string
}

export const BoxButton = (props: BoxButtonProps) => (
  <div className={classNames('BoxButton', props.className)}>
    <div className={'BoxButton__circle'} />
    <h3 className={'BoxButton__title'}>{props.title}</h3>
    <p className={'BoxButton__description'}>{props.description}</p>
    <Button className={'BoxButton__button'} text={props.buttonText} />
  </div>
)