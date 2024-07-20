import type { Meta, StoryObj } from '@storybook/web-components';
import { DS_COLOR_FEEDBACK } from '@utils/constants/colors.constants';
import { html } from 'lit';

const meta: Meta<any> = {
  title: 'Colors',
};

export default meta;

type Story = StoryObj<any>;

const Template = () => {
  return html`
    <ds-color-settings></ds-color-settings>

    ${Object.values(DS_COLOR_FEEDBACK).map(
      (color) =>
        html`<ds-card color=${color}><ds-text>${color}</ds-text></ds-card>`,
    )}
  `;
};

export const Feedback: Story = Template.bind({});
