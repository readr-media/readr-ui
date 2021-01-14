import {
  Component,
  Host,
  State,
  Event,
  EventEmitter,
  h,
  JSX,
} from '@stencil/core'
import { READR_MEDIA_OLD_PROJECT_SLUGS } from '@readr-media/old-news-project-slugs'

const DATA_URL =
  'https://www.readr.tw/api/public/posts?type={"$in":[1,4]}&sort=-published_at&max_result=3'
const NEWS_URL = 'https://www.readr.tw/post'
const REPORT_URL = 'https://www.readr.tw/project/3'
const OLD_REPORT_URL = 'https://www.readr.tw/project'

type Post = {
  title: string
  type: number
  slug: string
  id: number
  hero_image: string
  og_image: string
  published_at: string
}

type Coverage = {
  title: string
  href: string
  image: string
  publishedAt: string
}

function format(datatimeString: string): string {
  const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const date = new Date(datatimeString)
  return `${MONTHS[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`
}

function restructureData(data: Post): Record<string, unknown> {
  return {
    title: data.title,
    href: data.type === 4 ? getReportHref(data.slug) : `${NEWS_URL}/${data.id}`,
    image: data.og_image || data.hero_image,
    publishedAt: format(data.published_at),
  }
}

function getReportHref(slug: string) {
  return READR_MEDIA_OLD_PROJECT_SLUGS.includes(slug)
    ? `${OLD_REPORT_URL}/${slug}`
    : `${REPORT_URL}/${slug}`
}

async function fetchData(url: string) {
  try {
    const response = await fetch(url)
    const { _items = [] } = await response.json()
    return _items
  } catch (error) {
    console.error('fetchData error:', error)
    return []
  }
}

@Component({
  tag: 'readr-latest-coverages',
  styleUrl: 'readr-latest-coverages.scss',
  scoped: true,
})
export class ReadrLatestCoverages {
  @State() coverages: Coverage[]

  @Event() clickCoverage: EventEmitter
  handleClick = (): void => {
    this.clickCoverage.emit()
  }

  async componentWillLoad(): Promise<void> {
    const items = await fetchData(DATA_URL)
    this.coverages = items.map((item: Post) => restructureData(item))
  }

  render(): JSX.Element {
    return (
      this.coverages.length > 0 && (
        <Host>
          <h2>更多專題</h2>

          {this.coverages.map((coverage) => (
            <div class="coverage">
              <a
                href={coverage.href}
                target="_blank"
                onClick={this.handleClick}
              >
                <img src={coverage.image} alt="" />
              </a>

              <a
                class="info"
                href={coverage.href}
                target="_blank"
                onClick={this.handleClick}
              >
                <h3>{coverage.title}</h3>
                <p>{coverage.publishedAt}</p>
              </a>
            </div>
          ))}
        </Host>
      )
    )
  }
}
