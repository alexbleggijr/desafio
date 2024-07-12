import type { Preview } from '@storybook/web-components';
import '../www/build/desafio.esm';

const preview: Preview = {
  parameters: {
    staticDirs: ['../www'],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
