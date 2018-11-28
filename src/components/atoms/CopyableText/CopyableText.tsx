import * as classNames from 'classnames'
import * as ClipboardJS from 'clipboard'

import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './CopyableText.scss'

export interface CopyableTextProps extends ClassNameProps {
  readonly text: string
}

export class CopyableText extends React.Component<CopyableTextProps> {
  private mutableClipboard: HTMLDivElement
  private mutableTooltip: HTMLDivElement

  componentDidMount(): void {
    const clipboard = new ClipboardJS(this.mutableClipboard)
    clipboard.on('success', this.onSuccessClipboard.bind(this))
  }

  render(): JSX.Element {
    return (
      <div className={classNames('copyable-hash', this.props.className)}>
          <div ref={clipboard => this.mutableClipboard = clipboard} data-clipboard-text={this.props.text}>
            {this.props.children || this.props.text}
          </div>
          <div
            ref={tooltip => this.mutableTooltip = tooltip}
            className="tooltip"
          >
            Copied
          </div>
      </div>
    )
  }

  private showTooltip(tooltip: HTMLDivElement): void {
    const style = 'opacity: 1; z-index: 1'
    tooltip.setAttribute('style', style)
  }

  private hideTooltip(tooltip: HTMLDivElement): void {
    const style = 'opacity: 0; z-index: 0'
    tooltip.setAttribute('style', style)
  }

  private onSuccessClipboard(event: any): void {
    this.showTooltip(this.mutableTooltip)
    window.setTimeout(() => this.hideTooltip(this.mutableTooltip), 2000)
  }
}
