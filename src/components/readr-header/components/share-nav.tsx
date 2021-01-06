import {
  Component,
  Prop,
  Event,
  EventEmitter,
  h,
  State,
  JSX,
} from '@stencil/core'

@Component({
  tag: 'share-nav',
  styleUrl: 'share-nav.scss',
})
export class ShareNav {
  @Prop() shareBtnColor = '#000928'
  @Prop() shareFbBgColor = '#000928'
  @Prop() shareFbTextColor = '#fff'
  @Prop() shareLineBgColor = '#000928'
  @Prop() shareLineTextColor = '#fff'

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
        <button onClick={shareButtonClickHandler}>
          {/* eslint-disable-next-line prettier/prettier */}
          <svg fill="none" height="40" viewBox="0 0 40 40" width="40"><path clip-rule="evenodd" d="m32.381 12.2381c2.551 0 4.619-2.068 4.619-4.61905 0-2.55103-2.068-4.61905-4.619-4.61905-2.5511 0-4.6191 2.06802-4.6191 4.61905 0 2.55105 2.068 4.61905 4.6191 4.61905zm0 3c4.2078 0 7.619-3.4112 7.619-7.61905 0-4.20789-3.4112-7.61905-7.619-7.61905-4.2079 0-7.6191 3.41116-7.6191 7.61905 0 .84241.1367 1.65289.3892 2.41045l-11.1473 5.8114c-1.3597-2.0832-3.7115-3.4599-6.38475-3.4599-4.20789 0-7.61905 3.4111-7.61905 7.619s3.41116 7.619 7.61905 7.619c2.79885 0 5.24515-1.5091 6.56975-3.758l10.9031 6.295c-.2146.7038-.33 1.4509-.33 2.225 0 4.2078 3.4112 7.619 7.6191 7.619 4.2078 0 7.619-3.4112 7.619-7.619 0-4.2079-3.4112-7.6191-7.619-7.6191-2.4099 0-4.5585 1.1188-5.9546 2.8654l-11.2701-6.5068c.0539-.3657.0818-.7398.0818-1.1205 0-.5146-.051-1.0172-.1482-1.5032l11.4595-5.9742c1.3976 1.6604 3.4914 2.7155 5.8316 2.7155zm0 21.7619c2.551 0 4.619-2.068 4.619-4.619 0-2.5511-2.068-4.6191-4.619-4.6191-2.5511 0-4.6191 2.068-4.6191 4.6191 0 2.551 2.068 4.619 4.6191 4.619zm-20.1429-17c0 2.551-2.068 4.619-4.61905 4.619-2.55103 0-4.61905-2.068-4.61905-4.619s2.06802-4.619 4.61905-4.619c2.55105 0 4.61905 2.068 4.61905 4.619z" fill={this.shareBtnColor} fill-rule="evenodd"/></svg>
        </button>

        {isShareLinksToggled && (
          <div class="sns-links">
            <a
              href={urlShareFacebook}
              target="_blank"
              rel="noreferrer noopener"
              onClick={shareFacebookLinkHandler}
            >
              {/* eslint-disable-next-line prettier/prettier */}
              <svg fill="none" height="48" viewBox="0 0 48 48" width="48"><filter id="a" color-interpolation-filters="s-rGB" filterUnits="userSpaceOnUse" height="48" width="48" x="0" y="0"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape"/></filter><g filter="url(#a)"><circle cx="24" cy="20" fill={this.shareFbBgColor} r="20"/></g><path d="m26.0666 33v-10.9325h3.6897l.5507-4.2795h-4.2404v-2.7246c0-1.238.346-2.0763 2.1202-2.0763h2.2664v-3.8213c-1.093-.11296-2.1911-.16828-3.29-.16571-3.2607 0-5.4833 1.98861-5.4833 5.63931v3.1486h-3.6799v4.2795h3.6799v10.9325z" fill={this.shareFbTextColor}/></svg>
            </a>

            <a
              href={urlShareLine}
              target="_blank"
              rel="noreferrer noopener"
              onClick={shareLineLinkHandler}
            >
              {/* eslint-disable-next-line prettier/prettier */}
              <svg fill="none" height="48" viewBox="0 0 48 48" width="48"><filter id="a" color-interpolation-filters="s-rGB" filterUnits="userSpaceOnUse" height="48" width="48" x="0" y="0"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape"/></filter><clipPath id="b"><path d="m10 15h28v9.77403h-28z"/></clipPath><g filter="url(#a)"><circle cx="24" cy="20" fill={this.shareLineBgColor} r="20"/></g><g clip-path="url(#b)" fill={this.shareLineTextColor}><path d="m19.6797 15h-1.4637c-.2361 0-.425.1889-.425.3777v8.9714c0 .2361.1889.3777.425.3777h1.4637c.2361 0 .425-.1889.425-.3777v-8.9714c-.0472-.1888-.1889-.3777-.425-.3777z"/><path d="m29.6425 15h-1.4638c-.2361 0-.4249.1889-.4249.3777v5.3356l-4.108-5.5244s0-.0472-.0472-.0472c0 0 0 0-.0472-.0473 0 0 0 0-.0472 0h-1.4638c-.2361 0-.4249.1889-.4249.3778v8.9713c0 .2361.1888.3777.4249.3777h1.4638c.2361 0 .4249-.1888.4249-.3777v-5.3828l4.108 5.5717c.0472.0472.0472.0944.0944.0944h.0472.0472.0945 1.4637c.2361 0 .425-.1889.425-.3777v-8.9714c-.1889-.1888-.3778-.3777-.5666-.3777z"/><path d="m16.1855 22.5548h-3.9191v-7.1298c0-.2361-.1888-.425-.4249-.425h-1.4165c-.2361 0-.425.1889-.425.425v8.9713c0 .0944.0472.1889.0944.2833.0945.0472.1889.0944.2833.0944h5.7606c.2361 0 .3777-.1888.3777-.4249v-1.4638c.0472-.1416-.0944-.3305-.3305-.3305z"/><path d="m37.6222 17.2664c.2361 0 .3777-.1888.3777-.4249v-1.4165c0-.2361-.1416-.425-.3777-.425h-5.7606c-.0944 0-.1888.0472-.2833.0944-.0472.0945-.0944.1889-.0944.2833v8.9714c0 .0944.0472.1888.0944.2833.0945.0472.1889.0944.2833.0944h5.7606c.2361 0 .3777-.1889.3777-.4249v-1.4638c0-.2361-.1889-.4249-.3777-.4249h-3.9191v-1.511h3.9191c.2361 0 .3777-.1889.3777-.425v-1.3221c0-.1888-.1416-.3777-.3777-.3777h-3.9191v-1.511z"/></g></svg>
            </a>
          </div>
        )}
      </nav>
    )
  }
}
