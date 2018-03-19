import * as classNames from 'classnames'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './CopyableText.scss'

export interface CopyableTextProps extends ClassNameProps {
  readonly text: string
  readonly textClickable?: boolean
}

interface CopyableTextState {
  readonly tooltipVisible: boolean
  readonly tooltipPositionLeft?: number
  readonly tooltipPositionTop?: number
}

let inputEl: HTMLInputElement
let timeout: number

export class CopyableText extends React.Component<
  CopyableTextProps,
  CopyableTextState
> {
  private readonly styleTranslate = {
    transform: 'translate(-50%, -100%)'
  }

  constructor() {
    super()
    this.state = {
      tooltipVisible: false
    }
  }

  render() {
    return (
      <div
        className={classNames(
          'copyable-hash',
          this.props.className,
          this.state.tooltipVisible && 'tooltip-visible'
        )}
      >
        <input
          type="text"
          value={this.props.text}
          ref={input => (inputEl = input)}
          readOnly
        />
        <button onClick={this.onClick}>COPY</button>
        <div
          className="value"
          onClick={this.props.textClickable && this.onClick}
        >
          {this.props.children || this.props.text}
        </div>
        <div
          className="tooltip"
          onClick={this.props.textClickable && this.onClick}
          style={{ ...this.styleTranslate, ...this.stylePosition() }}
        >
          Copied
        </div>
      </div>
    )
  }

  private readonly onClick = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    inputEl.select()
    document.execCommand('copy')

    if (timeout) window.clearTimeout(timeout)

    this.setState({
      tooltipVisible: true,
      tooltipPositionLeft: event.clientX,
      tooltipPositionTop: event.clientY
    })
    timeout = window.setTimeout(
      () => this.setState({ tooltipVisible: false }),
      2000
    )
  }

  private readonly stylePosition = () => ({
    left: this.state.tooltipPositionLeft,
    top: this.state.tooltipPositionTop
  })
}
