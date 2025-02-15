// [lock-all/] 🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫
import { Preview } from '@storybook/react';

import './custom.css';

// Uncomment to enable Bootstrap (First run: npm i bootstrap --save-dev):
// import 'bootstrap/dist/css/bootstrap.min.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // options: {
    //   storySort: {
    //     method: 'alphabetical',
    //     order: [],
    //     locales: '',
    //   },
    // },
  },
};

export default preview;
