export const URL_READR = 'https://www.readr.tw'
export const URL_SHARE_FB = 'https://www.facebook.com/share.php'
export const URL_SHARE_LINE = 'https://social-plugins.line.me/lineit/share'
export const READR_ICON_BASE_URL = `${URL_READR}/public/2.0/icons`

export const configSocialNetwork = {
  fb: {
    imagePath: `${READR_ICON_BASE_URL}/fb-white-square.png`,
    backgroundColor: '#3b5998',
    innerIconWidth: '50%',
    getShareUrl(from) {
      return `${URL_SHARE_FB}/?u=${from}`
    }
  },
  line: {
    imagePath: `${READR_ICON_BASE_URL}/line.png`,
    backgroundColor: '#00b900',
    innerIconWidth: '70%',
    getShareUrl(from) {
      return `${URL_SHARE_LINE}/?url=${from}`
    }
  }
}
