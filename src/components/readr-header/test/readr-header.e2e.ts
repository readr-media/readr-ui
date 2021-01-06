import { newE2EPage } from '@stencil/core/testing'

describe('readr-header', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<readr-header></readr-header>')

    const element = await page.find('readr-header')
    expect(element).toHaveClass('hydrated')
  })
})
