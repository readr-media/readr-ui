import { newSpecPage } from '@stencil/core/testing';
import { ReadrHeader } from '../readr-header';

describe('readr-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ReadrHeader],
      html: `<readr-header></readr-header>`,
    });
    expect(page.root).toEqualHtml(`
      <readr-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </readr-header>
    `);
  });
});
