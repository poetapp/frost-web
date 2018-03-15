import * as classNames from 'classnames'
import { Button } from 'components/atoms/Button/Button'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './InputButton.scss'

interface InputButtonProps extends ClassNameProps {
  readonly name: string
  readonly type: string
  readonly placeholder?: string
  readonly required?: boolean
  readonly textButton?: string
  readonly onSubmit?: (event: any) => boolean
}

const onSubmit = (event: any, callback: any) => {
  event.preventDefault()
  const form = event.target
  const data = new FormData(form)
  const currentData = []

  for (const key of data.keys()) {
    const input = form.elements[key]
    const value = input.value
    const name = input.name
    currentData.push({ name, value })
  }

  callback(currentData)
}

export const InputButton = (props: InputButtonProps) => (
  <div className={'InputButton d-flex'}>
    <form onSubmit={event => onSubmit(event, props.onSubmit)}>
      <input
        name={props.name}
        type={props.type}
        className={classNames('InputButton__input', props.className)}
        placeholder={props.placeholder}
        required={props.required}
      />
      <Button className={'InputButton__button'} text={props.textButton} />
    </form>
  </div>
)
