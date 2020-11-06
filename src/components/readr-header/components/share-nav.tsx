import {Component, Event, EventEmitter, h, State} from '@stencil/core';
import snsToggleButton from '../assets/sns-toggle-button.svg'
import snsLinkFacebook from '../assets/sns-link-facebook.svg'
import snsLinkLINE from '../assets/sns-link-line.svg'

@Component({
  tag: 'share-nav',
  styleUrl: 'share-nav.scss',
})
export class MyEmbeddedComponent {
  @State() isShareLinksToggled: boolean;
  shareButtonClickHandler() {
    this.isShareLinksToggled = !this.isShareLinksToggled;
  }
  hideShareLinks() {
    this.isShareLinksToggled = false;
  }
  @Event({ composed: true }) shareFacebookLinkClick: EventEmitter;
  shareFacebookLinkHandler(e) {
    this.hideShareLinks()
    this.shareFacebookLinkClick.emit(e)
  }
  @Event({ composed: true }) shareLINELinkClick: EventEmitter;
  shareLINELinkHandler(e) {
    this.hideShareLinks()
    this.shareLINELinkClick.emit(e)
  }

  render() {
    const shareButtonClickHandler = () => this.shareButtonClickHandler();
    const shareFacebookLinkHandler = (e) => this.shareFacebookLinkHandler(e);
    const shareLINELinkHandler = (e) => this.shareLINELinkHandler(e);
    const isShareLinksToggled = this.isShareLinksToggled;
    const urlCurrentPage = typeof window !== "undefined" ? window.location.href : '/'
    const urlShareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${urlCurrentPage}`
    const urlShareLINE = `https://social-plugins.line.me/lineit/share?url=${urlCurrentPage}`

    return (
      <nav class="share-nav">
        <button
          class="share-nav__toggle-button toggle-button"
          onClick={shareButtonClickHandler}
          innerHTML={snsToggleButton}
        >
        </button>
        {
          isShareLinksToggled &&
            <div class="share-nav__sns-links sns-links">
              <a
                class="sns-links__link"
                href={urlShareFacebook}
                target="_blank"
                rel="noreferrer noopener"
                onClick={shareFacebookLinkHandler}
                innerHTML={snsLinkFacebook}
              >
              </a>
              <a
                class="sns-links__link"
                href={urlShareLINE}
                target="_blank"
                rel="noreferrer noopener"
                onClick={shareLINELinkHandler}
                innerHTML={snsLinkLINE}
              >
              </a>
            </div>
        }
      </nav>
    );
  }
}
