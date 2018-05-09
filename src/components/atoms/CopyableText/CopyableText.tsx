import * as classNames from 'classnames'
import { getParsedForm } from 'helpers'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './CopyableText.scss'

export interface CopyableTextProps extends ClassNameProps {
  readonly text: string
  readonly textClickable?: boolean
}

interface CopyableTextState {
  readonly tooltipVisible?: boolean
  readonly tooltipPositionLeft?: number
  readonly tooltipPositionTop?: number
  readonly timeout?: number
}

export class CopyableText extends React.Component<CopyableTextProps, CopyableTextState> {
  readonly state = {
    tooltipVisible: false,
    timeout: 0,
    tooltipPositionLeft: 0,
    tooltipPositionTop: 0,
  }

  private readonly styleTranslate = {
    transform: 'translate(-50%, -100%)',
  }

  render(): JSX.Element {
    return (
      <div
        className={classNames('copyable-hash', this.props.className, this.state.tooltipVisible && 'tooltip-visible')}
      >
        <form>
          <input type="text" name="text" value={this.props.text} readOnly />
          <button onClick={this.onClick}>COPY</button>
          <div className="value" onClick={this.props.textClickable && this.onClick}>
            {this.props.children || this.props.text}
          </div>
          <div
            className="tooltip"
            onClick={this.props.textClickable && this.onClick}
            style={{ ...this.styleTranslate, ...this.stylePosition() }}
          >
            Copied
          </div>
        </form>
      </div>
    )
  }

  private readonly onClick = (event: any) => {
    const { timeout } = this.state
    const form = event.target.parentNode
    const { elements } = getParsedForm(form)
    elements.text.select()
    document.execCommand('copy')

    if (timeout) window.clearTimeout(timeout)

    this.setState({
      tooltipVisible: true,
      tooltipPositionLeft: event.clientX,
      tooltipPositionTop: event.clientY,
    })

    const currentTimeout = window.setTimeout(() => this.setState({ tooltipVisible: false }), 2000)

    this.setState({ timeout: currentTimeout })
  }

  private readonly stylePosition = () => ({
    left: this.state.tooltipPositionLeft,
    top: this.state.tooltipPositionTop,
  })
}
