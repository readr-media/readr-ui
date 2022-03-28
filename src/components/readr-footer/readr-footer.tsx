import { Component, Host, h, Event, EventEmitter, JSX } from '@stencil/core'
import SOCIAL_MEDIA_LINKS from './social-media-links'

@Component({
  tag: 'readr-footer',
  styleUrl: 'readr-footer.scss',
  scoped: true,
})
export class ReadrFooter {
  @Event() aboutLinkClick: EventEmitter
  @Event() contactLinkClick: EventEmitter
  @Event() privacyLinkClick: EventEmitter

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
            <a
              href="https://www.readr.tw/post/2901"
              target="_blank"
              rel="noopener noreferrer"
            >
              服務條款
            </a>
          </div>
          <ul class="company-info">
            <li>精鏡傳媒股份有限公司</li>
            <li>114 台北市內湖區堤頂大道一段 365 號 7 樓</li>
            <li>readr@readr.tw</li>
          </ul>
          <div class="copyright">
            © {new Date().getFullYear()} READr All Rights Reserved
          </div>
        </footer>
      </Host>
    )
  }
}
