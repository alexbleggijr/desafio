import { newSpecPage } from '@stencil/core/testing';
import { DsCard } from '../ds-card';

describe('ds-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsCard],
      html: `<ds-card></ds-card>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-card>
    `);
  });
});
