import { newE2EPage } from '@stencil/core/testing';

describe('ds-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-text></ds-text>');

    const element = await page.find('ds-text');
    expect(element).toHaveClass('hydrated');
  });
});
