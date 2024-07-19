import { html, render } from 'lit';

interface Config {
  scheme: string;
  cssCustomProperties: string;
}

export const colorSystem = () => {
  let config: Config = { scheme: '', cssCustomProperties: '' };

  const colorHueFactor = '--hue-fator';
  const neutralHueFactor = '--hue-fator';
  const colorSaturationFactor = '--saturation-fator';
  const neutralSaturationFactor = '--saturation-fator';
  const deviceDefaultScheme = `${window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}`;
  const htmlEl = document.documentElement;
  const snipetEl = document.querySelector('.snipet') as HTMLElement;
  const schemeRadioFormEl = document.querySelector('#scheme-switcher');
  const hueRangeEl = document.querySelector('#hue');
  const saturationRangeEl = document.querySelector('#saturation');
  const luminosityRangeEl = document.querySelector('#luminosity');

  // function calls
  config.scheme = 'dark'; // medgrupo's default scheme
  render(setSnipet(config), snipetEl);
  toggleScheme(deviceDefaultScheme);

  // event listeners
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addListener((mediaQuery) => {
      const devicePreferenceScheme = `${mediaQuery.matches ? 'dark' : 'light'}`;
      toggleScheme(devicePreferenceScheme);
    });

  schemeRadioFormEl?.addEventListener('input', (event) => {
    const userSchemePreference = (event.target as HTMLInputElement).value;
    toggleScheme(userSchemePreference);
  });

  hueRangeEl?.addEventListener('input', (event) => {
    htmlEl.style.setProperty(
      `${colorHueFactor}`,
      `${(event.target as HTMLInputElement).value}`,
    );
    htmlEl.style.setProperty(
      `${neutralHueFactor}`,
      `${(event.target as HTMLInputElement).value}`,
    );
    config.cssCustomProperties = htmlEl.getAttribute('style')!.toString();
    render(setSnipet(config), snipetEl);
  });

  saturationRangeEl?.addEventListener('input', (event) => {
    htmlEl.style.setProperty(
      `${colorSaturationFactor}`,
      `${(event.target as HTMLInputElement).value}%`,
    );
    htmlEl.style.setProperty(
      `${neutralSaturationFactor}`,
      `${(event.target as HTMLInputElement).value}%`,
    );

    config.cssCustomProperties = htmlEl.getAttribute('style')!.toString();
    render(setSnipet(config), snipetEl);
  });

  luminosityRangeEl?.addEventListener('input', (event) => {
    htmlEl.style.setProperty(
      `--luminosity-fator-1`,
      `${Number((event.target as HTMLInputElement).value) * -1}%`,
    );
    htmlEl.style.setProperty(
      `--luminosity-fator-2`,
      `${(event.target as HTMLInputElement).value}%`,
    );
    htmlEl.style.setProperty(
      `--luminosity-fator-3`,
      `${(event.target as HTMLInputElement).value}%`,
    );

    config.cssCustomProperties = htmlEl.getAttribute('style')!.toString();
    render(setSnipet(config), snipetEl);
  });

  // functions
  function toggleScheme(scheme) {
    const radioEl = schemeRadioFormEl?.querySelector(
      `#${scheme}`,
    ) as HTMLInputElement;

    config.scheme = scheme;
    radioEl.checked = true;
    htmlEl.setAttribute('color-scheme', `${scheme}`);
    render(setSnipet(config), snipetEl);
  }

  function setSnipet(config) {
    return html`
      <pre class="language-html">
<code>
<span class="snipet__tag">&lt;</span><span class="snipet__tag">html</span>
  <span class="snipet__attribute">color-scheme</span><span class="snipet__aux">="</span><span class="snipet__value">${config.scheme}</span><span class="snipet__aux">"</span>
  <span class="snipet__attribute">style</span><span class="snipet__aux">="</span><span class="snipet__value">${config.cssCustomProperties}</span><span class="snipet__aux">"</span><span class="snipet__tag">&gt;
&lt;/html&gt</span>
</code>
</pre>
    `;
  }
};
