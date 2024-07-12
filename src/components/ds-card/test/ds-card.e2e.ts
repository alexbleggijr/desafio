import { newE2EPage } from '@stencil/core/testing';

describe('ds-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-card></ds-card>');

    const element = await page.find('ds-card');
    expect(element).toHaveClass('hydrated');
  });
});
