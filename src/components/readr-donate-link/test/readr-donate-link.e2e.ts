import { newE2EPage } from '@stencil/core/testing'

describe('readr-donate-link', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<readr-donate-link></readr-donate-link>')

    const element = await page.find('readr-donate-link')
    expect(element).toHaveClass('hydrated')
  })
})
