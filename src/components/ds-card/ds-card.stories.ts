import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

function generateColorOptions(name: string) {
  const nameList = [];
  for (let i = 1; i <= 5; i++) {
    nameList.push(`ds-color-${name}-${i}`);
  }
  return nameList;
}

const meta: Meta<any> = {
  title: 'Card',
  argTypes: {
    color: {
      control: 'select',
      options: generateColorOptions('brand'),
      description: 'Define a Cor.',

    },
  },
};

export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
  render: ({ ...args }) => {
    console.log(args)
    return html`
    <ds-card color="${args.color}">
    <ds-text>Lorem, ipsum dolor.</ds-text>
    </ds-card>
    `;
  },
};
