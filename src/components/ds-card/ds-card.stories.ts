import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_COLOR_BRAND } from '../constants/color.constants';

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
      options: [...TP_COLOR_BRAND],
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
    setTimeout(() => {
      const setColor = () => {
        const cards = document.querySelectorAll('ds-card');

        cards.forEach((card) => {
          if (args['color']) {
            card.setAttribute('color', args['color']);
            return;
          }

          card.removeAttribute('color');
        });
      };

      if (args['color'] || !args['color']) {
        setColor();
      }
    }, 100);

    return html`
      <ds-card>
        <h1>Lorem Ipsum</h1>
        <ds-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ds-text>
      </ds-card>
    `;
  },
};
