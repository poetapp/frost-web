import * as classNames from 'classnames'
import * as React from 'react'
import './Input.scss'

interface InputProps {
  readonly name: string
  readonly type: string
  readonly className?: string
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
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onFocus = this.onFocus.bind(this)
  }

  onChange(event: any, onChange: any) {
    event.preventDefault()
    const form = event.target.form
    const data = new FormData(form)
    const currentData: any = {}
    const elements: any = {}

    for (const key of data.keys()) {
      const input = form.elements[key]
      const value = input.value
      const name = input.name
      currentData[name] = value
      elements[name] = input
    }
    if (typeof onChange === 'function') onChange(event, currentData, elements)
  }

  onKeyUp(event: any, onKeyUp: any) {
    event.preventDefault()
    const form = event.target.form
    const data = new FormData(form)
    const currentData: any = {}
    const elements: any = {}

    for (const key of data.keys()) {
      const input = form.elements[key]
      const value = input.value
      const name = input.name
      currentData[name] = value
      elements[name] = input
    }
    if (typeof onKeyUp === 'function') onKeyUp(event, currentData, elements)
  }

  onFocus(event: any, onFocus: any) {
    event.preventDefault()
    const form = event.target.form
    const data = new FormData(form)
    const currentData: any = {}
    const elements: any = {}

    for (const key of data.keys()) {
      const input = form.elements[key]
      const value = input.value
      const name = input.name
      currentData[name] = value
      elements[name] = input
    }
    if (typeof onFocus === 'function') onFocus(event, currentData, elements)
  }

  render() {
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
        onChange={e => this.onChange(e, onChange)}
        onKeyUp={e => this.onKeyUp(e, onKeyUp)}
        onFocus={e => this.onKeyUp(e, onFocus)}
        {...(maxLength ? { maxLength } : {})}
        {...(minLength ? { minLength } : {})}
        {...(autoFocus ? { autoFocus: true } : {})}
        ref={inputRef}
      />
    )
  }
}
