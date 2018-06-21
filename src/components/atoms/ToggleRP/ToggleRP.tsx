import * as React from 'react'

import * as classNames from 'classnames'
import { ClassNameProps } from 'interfaces/Props'
import './ToggleRP.scss'

interface ToggleProps extends ClassNameProps {
  readonly children?: any
  readonly disabled?: boolean
  readonly on?: boolean
  readonly onClick?: () => void
}

interface ToggleState {
  readonly on?: boolean
}

// tslint:disable-next-line:readonly-array
const callAll = (...fns: Array<(...args: ReadonlyArray<any>) => void>) => (...args: Array<ReadonlyArray<any>>) =>
  fns.forEach(fn => fn && fn(...args))
const noop = () => ({})

export class ToggleRP extends React.Component<ToggleProps, ToggleState> {
  readonly state = {
    on: this.props.on ? true : false,
  }

  readonly toggle = () =>
    this.setState({
      on: !this.state.on,
    })

  readonly getToggleProps = (props: { readonly onClick?: any } = {}) => ({
    onClick: callAll(props.onClick, this.toggle),
  })

  render(): React.ReactElement<any> {
    const { children } = this.props
    return children ? (
      children({
        on: this.state.on,
        toggle: this.toggle,
        getToggleProps: this.getToggleProps,
      })
    ) : (
      <label className={classNames('ToggleRP', this.props.className)}>
        <input
          id={'test-id-input'}
          onClick={this.props.disabled ? noop : callAll(this.props.onClick, this.toggle)}
          checked={this.state.on}
          disabled={this.props.disabled}
          type={'checkbox'}
        />
        <span className={'ToggleRP__slider ToggleRP__round'} />
      </label>
    )
  }
}
