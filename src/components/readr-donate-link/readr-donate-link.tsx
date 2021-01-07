import { Component, Host, h, JSX } from '@stencil/core'

@Component({
  tag: 'readr-donate-link',
  styleUrl: 'readr-donate-link.scss',
  shadow: true,
})
export class ReadrDonateLink {
  render(): JSX.Element {
    return (
      <Host>
        <a
          href="https://www.readr.tw/donate"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div>贊助 READr 一起媒體實驗改革</div>
        </a>
      </Host>
    )
  }
}
