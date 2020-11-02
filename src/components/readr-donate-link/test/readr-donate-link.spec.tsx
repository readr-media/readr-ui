import { newSpecPage } from '@stencil/core/testing';
import { ReadrDonateLink } from '../readr-donate-link';

describe('readr-donate-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ReadrDonateLink],
      html: `<readr-donate-link></readr-donate-link>`,
    });
    expect(page.root).toEqualHtml(`
      <readr-donate-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </readr-donate-link>
    `);
  });
});
