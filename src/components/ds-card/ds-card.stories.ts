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
    setTimeout(() => {
      const setColor = () => {
        const cards = document.querySelectorAll('ds-card');

        cards.forEach((card) => {
          if (args['color']) {
            card.setAttribute('color', args['color']);

            card.style.setProperty('--ds-color', `var(--${args['color']})`);

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
        <ds-text>Lorem, ipsum dolor.</ds-text>
      </ds-card>
    `;
  },
};
