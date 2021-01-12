import { Component, Host, h, Event, EventEmitter, JSX } from '@stencil/core'
import readrLogo from './assets/readr-logo.svg'

@Component({
  tag: 'readr-header',
  styleUrl: 'readr-header.scss',
  scoped: true,
})
export class ReadrHeader {
  @Event({ composed: true }) readrLogoLinkClick: EventEmitter
  readrLogoLinkClickHandler(e: MouseEvent): void {
    this.readrLogoLinkClick.emit(e)
  }

  render(): JSX.Element {
    const readrLogoLinkClickHandler = (e: MouseEvent) =>
      this.readrLogoLinkClickHandler(e)

    return (
      <Host>
        <header>
          <h1>
            <a
              href="https://www.readr.tw"
              target="_blank"
              rel="noopener noreferrer"
              onClick={readrLogoLinkClickHandler}
              innerHTML={readrLogo}
            ></a>
          </h1>

          <share-nav />
        </header>
      </Host>
    )
  }
}
