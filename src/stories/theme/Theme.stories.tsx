import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Demo, DemoProps } from '../../components/demo/Demo';

const StoryComponent = (props: DemoProps) => {
  return <Demo {...props} />;
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Theme', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Light: Story = {
  args: {
    themeName: 'light',
    showCoverPage: false,
  },
};

export const Dark: Story = {
  args: {
    themeName: 'dark',
    showCoverPage: false,
  },
};

export const ScaledWithLargerPageSize: Story = {
  args: {
    pageSize: 'A0',
    scale: 2.5,
    showCoverPage: false,
  },
};

export const PastelCustomTheme: Story = {
  args: {
    showCoverPage: false,
    override: {
      pageProps: {
        style: {
          color: '#343a40',
          backgroundColor: '#F5F9FD',
        },
      },
      colorScheme: {
        colors: {
          blue: '#a3c7eb',
          indigo: '#9a7cbe',
          purple: '#d1a3d9',
          pink: '#f2a3c7',
          red: '#f2b2b7',
          orange: '#f2c6a8',
          yellow: '#f9e7b8',
          green: '#a3d7a8',
          teal: '#b2e1db',
          cyan: '#a3d5db',
        },
        theme: {
          primary: '#a3c7eb',
          secondary: '#ced4da',
          success: '#a3d7a8',
          info: '#a3d5db',
          warning: '#f9e7b8',
          danger: '#f2b2b7',
          light: '#f8f9fa',
          dark: '#495057',
        },
        contrast: {
          blue: '#000000',
          purple: '#000000',
          pink: '#000000',
          red: '#000000',
          orange: '#000000',
          yellow: '#000000',
          green: '#000000',
          teal: '#000000',
          cyan: '#000000',
          white: '#000000',
          primary: '#000000',
          secondary: '#000000',
          success: '#000000',
          info: '#000000',
          warning: '#000000',
          danger: '#000000',
          light: '#000000',
          dark: '#FFFFFF',
        },
      },
      linkProps: {
        style: {
          color: '#5C9DFE',
          fontWeight: 'bold',
        },
      },
      cardHeaderProps: {
        style: {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderRadius: 0,
        },
      },
      cardBodyProps: {
        style: {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderRadius: 0,
          backgroundColor: '#F5F9FD',
        },
      },
      buttonProps: {
        linkColor: '#5C9DFE',
        style: {
          borderColor: '#343a40',
          borderWidth: 1,
          borderRadius: 0,
        },
      },
      tableProps: {
        stripeOpacity: 0.1,
        stripeStyle: {
          backgroundColor: '#00000009',
        },
      },
      tableCellProps: {
        swatchOpacity: 0.5,
      },
      headingProps: {
        style: {
          color: '#343a40',
          borderBottomColor: '#343a40',
        },
      },
      signatureProps: {
        style: {
          borderBottomColor: '#343a40',
        },
      },
      blockquoteProps: {
        swatchOpacity: 0.3,
        style: {
          borderLeftWidth: 20,
        },
      },
    },
  },
};
