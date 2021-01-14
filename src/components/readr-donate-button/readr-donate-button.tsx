import { Component, Host, h, Event, EventEmitter, JSX } from '@stencil/core'

@Component({
  tag: 'readr-donate-button',
  styleUrl: 'readr-donate-button.scss',
  scoped: true,
})
export class ReadrDonateButton {
  @Event() clickButton: EventEmitter
  handleClick = (): void => {
    this.clickButton.emit()
  }

  render(): JSX.Element {
    return (
      <Host>
        <a
          href="https://www.readr.tw/donate"
          target="_blank"
          rel="noreferrer noopener"
          onClick={this.handleClick}
        >
          <div>贊助 READr 一起媒體實驗改革</div>
        </a>
      </Host>
    )
  }
}
