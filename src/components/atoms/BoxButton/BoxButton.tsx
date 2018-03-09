import * as classNames from 'classnames'
import 'components/atoms/BoxButton.scss'
import { Button } from 'components/atoms/Button/Button'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

interface BoxButtonProps extends ClassNameProps {
  readonly title?: string
  readonly description?: string
  readonly buttonText?: string
  readonly image: string
}

export const BoxButton = (props: BoxButtonProps) => (
  <div className={classNames('BoxButton', props.className)}>
    <img className={'BoxButton__circle'} src={props.image} />
    <h3 className={'BoxButton__title'}>{props.title}</h3>
    <p className={'BoxButton__description'}>{props.description}</p>
    <Button className={'BoxButton__button'} text={props.buttonText} />
  </div>
)
