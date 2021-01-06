import { Component, Event, EventEmitter, h, State, JSX } from '@stencil/core'
import snsToggleButton from '../assets/sns-toggle-button.svg'
import snsLinkFacebook from '../assets/sns-link-facebook.svg'
import snsLinkLine from '../assets/sns-link-line.svg'

@Component({
  tag: 'share-nav',
  styleUrl: 'share-nav.scss',
})
export class ShareNav {
  @State() isShareLinksToggled: boolean
  shareButtonClickHandler(): void {
    this.isShareLinksToggled = !this.isShareLinksToggled
  }
  hideShareLinks(): void {
    this.isShareLinksToggled = false
  }
  @Event({ composed: true }) shareFacebookLinkClick: EventEmitter
  shareFacebookLinkHandler(e: MouseEvent): void {
    this.hideShareLinks()
    this.shareFacebookLinkClick.emit(e)
  }
  @Event({ composed: true }) shareLineLinkClick: EventEmitter
  shareLineLinkHandler(e: MouseEvent): void {
    this.hideShareLinks()
    this.shareLineLinkClick.emit(e)
  }

  render(): JSX.Element {
    const shareButtonClickHandler = () => this.shareButtonClickHandler()
    const shareFacebookLinkHandler = (e: MouseEvent) =>
      this.shareFacebookLinkHandler(e)
    const shareLineLinkHandler = (e: MouseEvent) => this.shareLineLinkHandler(e)
    const isShareLinksToggled = this.isShareLinksToggled
    const urlCurrentPage =
      typeof window !== 'undefined' ? window.location.href : '/'
    const urlShareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${urlCurrentPage}`
    const urlShareLine = `https://social-plugins.line.me/lineit/share?url=${urlCurrentPage}`

    return (
      <nav class="share-nav">
        <button
          onClick={shareButtonClickHandler}
          innerHTML={snsToggleButton}
        ></button>
        {isShareLinksToggled && (
          <div class="sns-links">
            <a
              href={urlShareFacebook}
              target="_blank"
              rel="noreferrer noopener"
              onClick={shareFacebookLinkHandler}
              innerHTML={snsLinkFacebook}
            ></a>
            <a
              href={urlShareLine}
              target="_blank"
              rel="noreferrer noopener"
              onClick={shareLineLinkHandler}
              innerHTML={snsLinkLine}
            ></a>
          </div>
        )}
      </nav>
    )
  }
}
