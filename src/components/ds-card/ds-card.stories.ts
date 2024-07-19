import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  DS_COLORS,
  DS_COLORS_MEDSOFT,
  DS_COLORS_PRODUTOS,
} from '@utils/constants/colors.constants';

const meta: Meta<any> = {
  title: 'Card',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [...DS_COLORS, ...DS_COLORS_MEDSOFT, ...DS_COLORS_PRODUTOS],
      description: `Component's colors.`,
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
