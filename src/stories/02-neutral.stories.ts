import type { Meta, StoryObj } from '@storybook/web-components';
import { DS_COLOR_NEUTRAL } from '@utils/constants/colors.constants';
import { html } from 'lit';

const meta: Meta<any> = {
  title: 'Colors',
};

export default meta;

type Story = StoryObj<any>;

export const Neutral: Story = {
  render: () => {
    return html`
      <style>
        ds-card {
          margin-bottom: 8px;
        }
      </style>

      ${Object.values(DS_COLOR_NEUTRAL).map(
        (color) =>
          html`<ds-card color=${color}><ds-text>${color}</ds-text></ds-card>`,
      )}
    `;
  },
};
