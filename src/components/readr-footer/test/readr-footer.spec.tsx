import { newSpecPage } from '@stencil/core/testing'
import { ReadrFooter } from '../readr-footer'

describe('readr-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ReadrFooter],
      html: `<readr-footer></readr-footer>`,
    })
    expect(page.root).toEqualHtml(`
      <readr-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </readr-footer>
    `)
  })
})
