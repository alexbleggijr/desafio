import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  DS_COLORS,
  DS_COLORS_MEDSOFT,
} from '@utils/constants/colors.constants';

const meta: Meta<any> = {
  title: 'Card',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [...DS_COLORS, ...DS_COLORS_MEDSOFT],
      description: `Component's colors.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: [...DS_COLORS, ...DS_COLORS_MEDSOFT].join('|'),
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
  render: ({ ...args }) => {
    setTimeout(() => {
      const setColor = () => {
        const accordions = document.querySelectorAll('ds-card');

        accordions.forEach((accordion) => {
          if (args['color']) {
            accordion.setAttribute('color', args['color']);
          }
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
