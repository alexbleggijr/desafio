import type { Meta, StoryObj } from '@storybook/web-components';
import { DS_COLOR_NEUTRAL } from '@utils/constants/colors.constants';
import { html } from 'lit';
import { colorSystem } from '../../.storybook/utils/functions/colors.functions';

const meta: Meta<any> = {
  title: 'Colors',
};

export default meta;

type Story = StoryObj<any>;

const Template = () => {
  setTimeout(() => {
    colorSystem();
  }, 100);

  return html`
    <style>
      ds-card {
        margin-bottom: 8px;
      }
    </style>

    <div class="snipet"></div>

    <form id="scheme-switcher" class="switcher">
      <ul class="switcher__list">
        <li class="switcher__item">
          <h2>Schemes:</h2>
        </li>
        <li class="switcher__item">
          <input
            id="light"
            class="switcher__input"
            type="radio"
            name="scheme"
            value="light"
          />
          <label class="switcher__label" for="light">Light</label>
        </li>
        <li class="switcher__item">
          <input
            id="dark"
            class="switcher__input"
            type="radio"
            name="scheme"
            value="dark"
          />
          <label class="switcher__label" for="dark">Dark</label>
        </li>
      </ul>
    </form>

    <ul class="switcher__list">
      <li class="switcher__item">
        <h2>Theme Config:</h2>
      </li>
      <li class="switcher__item">
        <input
          class="hue"
          id="hue"
          type="range"
          name="hue"
          min="0"
          max="360"
          value="0"
        />
        <label class="switcher__label" for="hue">hue</label>
      </li>
      <li class="switcher__item">
        <input
          class="saturation"
          id="saturation"
          type="range"
          name="saturation"
          min="0"
          max="100"
          value="0"
        />
        <label class="switcher__label" for="saturation">saturation</label>
      </li>
      <li class="switcher__item">
        <input
          class="luminosity"
          id="luminosity"
          type="range"
          name="luminosity"
          min="0"
          max="50"
          value="0"
        />
        <label class="switcher__label" for="luminosity">contrast</label>
      </li>
    </ul>

    ${Object.values(DS_COLOR_NEUTRAL).map(
      (color) =>
        html`<ds-card color=${color}><ds-text>${color}</ds-text></ds-card>`,
    )}
  `;
};

export const Neutral: Story = Template.bind({});
