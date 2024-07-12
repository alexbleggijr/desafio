import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta<any> = {
  title: 'Card',
  argTypes: {
    color: {
      control: 'select',
      options: ['color'],
    },
  },
};

export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
  render: ({ ...args }) => {
    return html`
      <ds-card color="${args.color}">
        <ds-text>Lorem, ipsum dolor.</ds-text>
      </ds-card>
    `;
  },
};
