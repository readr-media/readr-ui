import {
  Component,
  Host,
  State,
  Event,
  EventEmitter,
  h,
  JSX,
  getAssetPath,
} from '@stencil/core'

const SITE_URL = 'https://www.readr.tw'
const MAX_RESULT = 4
const DATA_URL =
  `${SITE_URL}/api/public/latest-posts?maxResult=${MAX_RESULT}`

type Post = {
  id: string
  slug: string
  title: string
  style: string
  heroImage: any
  ogImage: any
  publishTime: string
  readingTime: number
}

type Coverage = {
  id: string,
  title: string,
  href: string,
  date: string,
  readTime: string,
  isReport: boolean,
  img: any,
}

function getHref(style: string, id: string, slug: string) {
  switch (style) {
    case 'news':
      return `${SITE_URL}/post/${id}`
    case 'embedded':
      return `${SITE_URL}/post/${id}`
    case 'report':
      return `${SITE_URL}/project/${slug}`
    case 'project3':
      return `${SITE_URL}/project/3/${slug}`
    default:
      return undefined
  }
}

function formatPostDate(datetime: string) {
  const target = new Date(datetime) ?? undefined
  if (!target) return ''
  const now = new Date()
  const nowYear = now.getFullYear()
  const year = target.getFullYear()
  const month = target.getMonth() + 1
  const date = target.getDate()
  const formatDate = date < 10 ? `0${date}` : `${date}`
  return nowYear === year ? `${month}/${formatDate}` : `${year}/${month}/${formatDate}`
}

function formatReadTime(readingTime: number = 0) {
  return readingTime ? `閱讀時間 ${readingTime} 分鐘` : `閱讀時間 10 分鐘`
}

function isReport(style: string = '') {
  return style === 'report' || style === 'project3' || style === 'embedded'
}

function restructureData(post: Post): Record<string, unknown> {
  const {
    id = '',
    title = '',
    heroImage = {
      urlOriginal: '',
      urlTinySized: '',
      urlMobileSized: '',
      urlTabletSized: '',
      urlDesktopSized: '',
    },
    readingTime = 0,
    publishTime = '',
    style = '',
    slug = '',
  } = post || {}
  return {
    id,
    title,
    href: getHref(style, id, slug),
    date: formatPostDate(publishTime),
    readTime: formatReadTime(readingTime),
    isReport: isReport(style),
    img: {
      src:
        heroImage?.urlMobileSized ||
        heroImage?.urlTabletSized ||
        getAssetPath('./assets/post.svg')
    },
  }
}

async function fetchData(url: string) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('fetchData error:', error)
    return []
  }
}

@Component({
  tag: 'readr-latest-coverages',
  styleUrl: 'readr-latest-coverages.scss',
  assetsDirs: ['assets'],
  scoped: true,
})
export class ReadrLatestCoverages {
  @State() coverages: Coverage[]

  @Event() clickCoverage: EventEmitter
  handleClick = (): void => {
    this.clickCoverage.emit()
  }

  async componentWillLoad(): Promise<void> {
    const { latestPosts = [] } = await fetchData(DATA_URL)
    this.coverages = latestPosts.map((post: Post) => restructureData(post))
  }

  render(): JSX.Element {
    return (
      this.coverages.length > 0 && (
        <Host>
          <div class="readr-latest-coverages__title">
            <span class="readr-latest-coverages__title-text">最新報導</span>
          </div>

          <ul class="readr-latest-coverages__list">
            {this.coverages.map((coverage) => (
              <li class="readr-latest-coverages__list__item" onClick={this.handleClick}>
                <a href={coverage.href} target="_blank">
                  <div class="picture">
                    <picture>
                      <img src={coverage.img.src} alt={coverage.title} />
                    </picture>
                    {coverage.isReport && <label class="picture__report-label">專題</label>}
                  </div>
                  <div class="text">
                    <h4>
                      <span>{coverage.title}</span>
                    </h4>
                    {coverage.date && (
                      <div class="text__info">
                        <span class="text__info-date">{coverage.date}</span>
                        {coverage.readTime && (
                          <span class="text__info-readtime">{ coverage.readTime }</span>
                        )}
                      </div>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Host>
      )
    )
  }
}
