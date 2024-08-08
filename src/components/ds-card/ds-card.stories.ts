import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { DS_COLOR_BRAND, DS_COLOR_FEEDBACK, DS_COLOR_NEUTRAL } from '../constants/color.constants';
import { DS_TYPE_SIZE } from '../constants/type.constants';


const meta: Meta<any> = {
  title: 'Card',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [...DS_COLOR_BRAND, ...DS_COLOR_NEUTRAL, ...DS_COLOR_FEEDBACK],
      description: `Cor do texto`,
    },
    size: {
      control: { type: 'select' },
      options: [...DS_TYPE_SIZE],
      description: `Tamanho da Fonte`,
    },
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

      const setSize = () => {
        const texts = document.querySelectorAll('ds-text');

        texts.forEach((text) => {
          if (args['size']) {
            text.setAttribute('size', args['size']);

            return;
          }

          text.removeAttribute('size');
        });
      };

      if (args['color'] || !args['color']) {
        setColor();
      }

      if (args['size'] || !args['size']) {
        setSize();
      }
    }, 100);

    return html`
      <ds-card>
        <ds-text>Lorem Ipsum is simply dummy text.</ds-text>
      </ds-card>
    `;
  },
};

