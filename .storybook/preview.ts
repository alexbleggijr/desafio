import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/web-components';
import '../styles/desafio.css';
import '../www/build/desafio.esm';

const preview: Preview = {
  parameters: {
    staticDirs: ['../www'],
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<any>({
      themes: {
        Dark: 'ds-dark',
        Light: 'ds-light',
      },
      defaultTheme: 'Dark',
    }),
  ],
};

export default preview;
