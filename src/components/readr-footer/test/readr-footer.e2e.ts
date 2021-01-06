import { newE2EPage } from '@stencil/core/testing'

describe('readr-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<readr-footer></readr-footer>')

    const element = await page.find('readr-footer')
    expect(element).toHaveClass('hydrated')
  })
})
