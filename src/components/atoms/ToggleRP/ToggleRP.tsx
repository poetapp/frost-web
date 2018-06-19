import * as React from 'react'

import * as classNames from 'classnames'
import { ClassNameProps } from 'interfaces/Props'
import './ToggleRP.scss'

interface ToggleProps extends ClassNameProps {
  readonly children?: any
  readonly on?: boolean
  readonly labelledby?: string
  readonly disabled?: boolean
  readonly onClick?: () => void
}

interface ToggleState {
  readonly on?: boolean
}

const callAll = (...fns: Array<any>) => (...args: Array<any>) => fns.forEach(fn => fn && fn(...args))

export class ToggleRP extends React.Component<ToggleProps, ToggleState> {
  readonly state = {
    on: this.props.on ? true : false,
  }

  readonly toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  readonly getToggleProps = (props: { readonly onClick?: any } = {}) => ({
    onClick: callAll(props.onClick, this.toggle),
  })

  render(): any {
    const { children } = this.props
    return children ? (
      children({
        on: this.state.on,
        toggle: this.toggle,
        getToggleProps: this.getToggleProps,
      })
    ) : (
      <button
        disabled={this.props.disabled}
        onClick={callAll(this.props.onClick, this.toggle)}
        className={classNames('ToggleRP', this.props.className)}
        role="switch"
        aria-checked={this.state.on ? 'true' : 'false'}
        aria-labelledby={this.props.labelledby ? this.props.labelledby : ''}
      >
        <span>on</span>
        <span>off</span>
      </button>
    )
  }
}
