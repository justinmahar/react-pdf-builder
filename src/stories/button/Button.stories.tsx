import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from '../../components/button/Button';
import { Box } from '../../components/layout/Box';
import { usePDFThemeContext } from '../../components/theme/PDFThemeProvider';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: ButtonProps) => {
  const theme = usePDFThemeContext();
  const swatches = [
    undefined,
    ...Object.keys(theme.colorScheme?.colors ?? {}),
    ...Object.keys(theme.colorScheme?.theme ?? {}),
    ...Object.keys(theme.colorScheme?.greyscale ?? {}),
    'link',
  ];
  const elements = swatches.map((swatch) => (
    <Button wrap={false} key={swatch} swatch={swatch as any} {...props}>
      {swatch ? swatch.substring(0, 1).toUpperCase() + swatch.substring(1) : 'Default'}
    </Button>
  ));
  return (
    <PDFStory>
      <Box className="justify-content-center flex-wrap gap-3">{elements}</Box>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Button', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Regular: Story = {
  args: {},
};

export const Pill: Story = {
  args: { pill: true },
};

export const WithHref: Story = {
  args: { href: 'https://github.com/justinmahar/react-pdf-builder' },
};

export const Custom: Story = {
  args: {
    style: {
      borderRadius: 20,
      width: 250,
      fontSize: 30,
      borderColor: 'black',
      borderWidth: 1,
    },
  },
};
