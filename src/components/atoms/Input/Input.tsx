import * as classNames from 'classnames'
import { getParsedForm } from 'helpers'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './Input.scss'

interface InputProps extends ClassNameProps {
  readonly name: string
  readonly type: string
  readonly placeholder?: string
  readonly required?: boolean
  readonly minLength?: number
  readonly maxLength?: number
  readonly onChange?: (event: Event) => void
  readonly onKeyUp?: (event: Event) => void
  readonly onFocus?: (event: Event) => void
  readonly autoFocus?: boolean
  readonly ref?: any
  readonly inputRef?: any
}

export class Input extends React.Component<InputProps, undefined> {
  readonly onEvent = (
    event: any,
    callback: (event: Event, currentData: object, elements: object) => void,
    props: InputProps
  ): void => {
    if (props.type !== 'checkbox') event.preventDefault()
    const form = event.target.form
    const { currentData, elements } = getParsedForm(form)
    if (typeof callback === 'function') callback(event, currentData, elements)
  }

  render(): JSX.Element {
    const {
      name,
      type,
      placeholder,
      required,
      className,
      onChange,
      onKeyUp,
      onFocus,
      maxLength,
      minLength,
      autoFocus,
      inputRef
    } = this.props

    return (
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={classNames('Input', className)}
        onChange={e => this.onEvent(e, onChange, this.props)}
        onKeyUp={e => this.onEvent(e, onKeyUp, this.props)}
        onFocus={e => this.onEvent(e, onFocus, this.props)}
        {...(maxLength ? { maxLength } : {})}
        {...(minLength ? { minLength } : {})}
        {...(autoFocus ? { autoFocus: true } : {})}
        ref={inputRef}
      />
    )
  }
}
