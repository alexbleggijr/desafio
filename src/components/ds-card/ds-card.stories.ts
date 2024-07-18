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
    background: {
      control: 'select',
      options: generateColorOptions('brand'),
      description: 'Define o background.',
    }
  },
};

export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
  render: ({ ...args }) => {
    console.log(args)
    return html`
    <ds-card color="${args.color}" style="--color: var(--${args.color});">
      <ds-text
        slot="text"
      >
        Aqui vai o card.
      </ds-text>
    </ds-card>
    `;
  },
};
