import { newSpecPage } from '@stencil/core/testing';
import { DsText } from '../ds-text';

describe('ds-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsText],
      html: `<ds-text></ds-text>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-text>
    `);
  });
});
