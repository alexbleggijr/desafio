import { newSpecPage } from '@stencil/core/testing';
import { DsColorSettings } from '../ds-color-settings';

describe('ds-color-settings', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsColorSettings],
      html: `<ds-color-settings></ds-color-settings>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-color-settings>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-color-settings>
    `);
  });
});
