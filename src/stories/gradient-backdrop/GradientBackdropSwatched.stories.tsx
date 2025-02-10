import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GradientBackdrop, GradientBackdropProps } from '../../components/backgrounds/GradientBackdrop';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: GradientBackdropProps) => {
  return (
    <PDFStory>
      <GradientBackdrop {...props} />
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/GradientBackdrop/Swatches', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===

export const Blue: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'blue',
  },
};

export const Indigo: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'indigo',
  },
};

export const Purple: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'purple',
  },
};

export const Pink: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'pink',
  },
};

export const Red: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'red',
  },
};

export const Orange: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'orange',
  },
};

export const Yellow: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'yellow',
  },
};

export const Green: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'green',
  },
};

export const Teal: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'teal',
  },
};

export const Cyan: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'cyan',
  },
};

export const White: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'white',
  },
};

export const Gray100: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'gray100',
  },
};

export const Gray200: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'gray200',
  },
};

export const Gray300: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'gray300',
  },
};

export const Gray400: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'gray400',
  },
};

export const Gray500: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'gray500',
  },
};

export const Gray600: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'gray600',
  },
};

export const Gray700: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'gray700',
  },
};

export const Gray800: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'gray800',
  },
};

export const Gray900: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'gray900',
  },
};

export const Black: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'black',
  },
};

export const Primary: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'secondary',
  },
};

export const Success: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'success',
  },
};

export const Info: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'info',
  },
};

export const Warning: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'warning',
  },
};

export const Danger: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'danger',
  },
};

export const Light: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'light',
  },
};

export const Dark: Story = {
  args: {
    size: 'A4',
    darken: true,
    swatch: 'dark',
  },
};
