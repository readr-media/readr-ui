import { Component, Host, h, Event, EventEmitter, JSX } from '@stencil/core'
import SOCIAL_MEDIA_LINKS from './social-media-links'

@Component({
  tag: 'readr-footer',
  styleUrl: 'readr-footer.scss',
  shadow: true,
})
export class ReadrFooter {
  @Event({ composed: true }) aboutLinkClick: EventEmitter
  @Event({ composed: true }) contactLinkClick: EventEmitter
  @Event({ composed: true }) privacyLinkClick: EventEmitter

  aboutLinkClickHandler(e: MouseEvent): void {
    this.aboutLinkClick.emit(e)
  }
  contactLinkClickHandler(e: MouseEvent): void {
    this.contactLinkClick.emit(e)
  }
  privacyLinkClickHandler(e: MouseEvent): void {
    this.privacyLinkClick.emit(e)
  }

  render(): JSX.Element {
    const aboutLinkClickHandler = (e: MouseEvent) =>
      this.aboutLinkClickHandler(e)
    const contactLinkClickHandler = (e: MouseEvent) =>
      this.contactLinkClickHandler(e)
    const privacyLinkClickHandler = (e: MouseEvent) =>
      this.privacyLinkClickHandler(e)

    return (
      <Host>
        <footer>
          <div class="media-links">
            {SOCIAL_MEDIA_LINKS.map((medium) => {
              return (
                <a
                  key={medium.href}
                  href={medium.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  innerHTML={medium.svgIcon}
                ></a>
              )
            })}
          </div>
          <div class="us-links">
            <a
              href="https://www.readr.tw/about"
              target="_blank"
              rel="noopener noreferrer"
              onClick={aboutLinkClickHandler}
            >
              關於我們
            </a>
            <a href="mailto:readr@readr.tw" onClick={contactLinkClickHandler}>
              聯絡我們
            </a>
            <a
              href="https://www.readr.tw/privacy-rule"
              target="_blank"
              rel="noopener noreferrer"
              onClick={privacyLinkClickHandler}
            >
              隱私政策
            </a>
            <a
              href="https://forms.gle/C6B5MGYXLzXrmfSe6"
              target="_blank"
              rel="noopener noreferrer"
            >
              意見回饋
            </a>
          </div>
          <div class="copyright">© 2020 READr All Rights Reserved</div>
        </footer>
      </Host>
    )
  }
}
