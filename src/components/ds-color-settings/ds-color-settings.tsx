import { Component, Element, h, Host, State } from '@stencil/core';

const HUE_FACTOR = '--ds-hue-factor';
const SATURATION_FACTOR = '--ds-saturation-factor';
const LUMINOSITY_FACTOR_LOWER = '--ds-luminosity-factor-lower';
const LUMINOSITY_FACTOR_FIXED = '--ds-luminosity-factor-fixed';
const LUMINOSITY_FACTOR_UPPER = '--ds-luminosity-factor-upper';
const DEFAULT_SCHEME = 'dark';

interface Config {
  scheme: string;
  hue: number;
  saturation: number;
  luminosity: number;
}

type Scheme = 'dark' | 'light';

@Component({
  tag: 'ds-color-settings',
  styleUrl: 'ds-color-settings.scss',
})
export class DsColorSettings {
  htmlEl: HTMLElement;

  @Element() host!: HTMLElement;

  @State() config: Config = {
    scheme: DEFAULT_SCHEME,
    hue: null,
    saturation: null,
    luminosity: null,
  };

  /**
   * lifecycle
   */
  componentDidRender() {
    this.htmlEl = document.documentElement;
    const deviceDefaultScheme: Scheme = `${window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}`;

    this.toggleScheme(deviceDefaultScheme);

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const deviceDefaultScheme = event.matches ? 'dark' : 'light';
        this.toggleScheme(deviceDefaultScheme);
      });
  }

  /**
   * implementation
   */
  private toggleScheme = (scheme: Scheme) => {
    this.config.scheme = `${scheme}`;

    const radioEl: HTMLInputElement = this.host.querySelector(
      `#${this.config.scheme}`,
    );
    radioEl.checked = true;

    this.htmlEl.setAttribute('ds-color-scheme', `${this.config.scheme}`);

    this.setLuminosity(this.config.luminosity);
  };

  private setLuminosity = (luminosity: number) => {
    this.htmlEl.style.setProperty(
      `${LUMINOSITY_FACTOR_LOWER}`,
      `${luminosity * (this.config.scheme === 'dark' ? -1 : 1)}%`,
    );
    this.htmlEl.style.setProperty(
      `${LUMINOSITY_FACTOR_FIXED}`,
      `${luminosity * 1}%`,
    );
    this.htmlEl.style.setProperty(
      `${LUMINOSITY_FACTOR_UPPER}`,
      `${luminosity * (this.config.scheme === 'dark' ? 1 : -1)}%`,
    );
  };

  /**
   * listeners
   */
  private handleSchemeChange = (event) => {
    const userSchemePreference = event.target.value;
    this.config.scheme = `${userSchemePreference}`;

    this.toggleScheme(userSchemePreference);
  };

  private handleHueChange = (event) => {
    const hue = event.target.value;
    this.config.hue = hue;

    this.htmlEl.style.setProperty(`${HUE_FACTOR}`, `${hue}`);
  };

  private handleSaturationChange = (event) => {
    const saturation = event.target.value;
    this.config.saturation = saturation;

    this.htmlEl.style.setProperty(`${SATURATION_FACTOR}`, `${saturation}%`);
  };

  private handleLuminosityChange = (event) => {
    const luminosity = event.target.value;
    this.config.luminosity = luminosity;

    this.setLuminosity(this.config.luminosity);
  };

  render() {
    return (
      <Host>
        <form class="switcher">
          <ul class="switcher__list">
            <li class="switcher__item">
              <h2 class="switcher__heading">Schemes:</h2>
            </li>
            <li class="switcher__item">
              <input
                id="light"
                class="switcher__input"
                type="radio"
                name="scheme"
                value="light"
                onInput={(event) => this.handleSchemeChange(event)}
              />
              <label class="switcher__label" htmlFor="light">
                Light
              </label>
            </li>
            <li class="switcher__item">
              <input
                id="dark"
                class="switcher__input"
                type="radio"
                name="scheme"
                value="dark"
                onInput={(event) => this.handleSchemeChange(event)}
              />
              <label class="switcher__label" htmlFor="dark">
                Dark
              </label>
            </li>
          </ul>
        </form>

        <ul class="switcher__list">
          <li class="switcher__item">
            <h2 class="switcher__heading">Theme Config:</h2>
          </li>
          <li class="switcher__item">
            <input
              class="switcher__input"
              id="hue"
              type="range"
              name="hue"
              min="0"
              max="360"
              value="0"
              onInput={(event) => this.handleHueChange(event)}
            />
            <label class="switcher__label" htmlFor="hue">
              hue
            </label>
          </li>
          <li class="switcher__item">
            <input
              class="switcher__input"
              id="saturation"
              type="range"
              name="saturation"
              min="0"
              max="100"
              value="0"
              onInput={(event) => this.handleSaturationChange(event)}
            />
            <label class="switcher__label" htmlFor="saturation">
              saturation
            </label>
          </li>
          <li class="switcher__item">
            <input
              class="switcher__input"
              id="luminosity"
              type="range"
              name="luminosity"
              min="0"
              max="50"
              value="0"
              onInput={(event) => this.handleLuminosityChange(event)}
            />
            <label class="switcher__label" htmlFor="luminosity">
              contrast
            </label>
          </li>
        </ul>
      </Host>
    );
  }
}
