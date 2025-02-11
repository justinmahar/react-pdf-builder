import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading1 } from '../../components/typography/Heading1';
import { PDFStory } from '../parts/PDFStory';
import { GradientBackdrop, GradientBackdropProps } from '../../components/backdrops/GradientBackdrop';
import { GradientType } from '../../components/shapes/Gradients';

const StoryComponent = (props: GradientBackdropProps) => {
  return (
    <PDFStory pageProps={{ orientation: props.orientation ?? 'portrait' }}>
      <GradientBackdrop {...props} />
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/GradientBackdrop', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const SolidDefault: Story = {
  args: {
    size: 'A4',
  },
};

export const SolidSingleColor: Story = {
  args: {
    size: 'A4',
    gradient: ['red'],
  },
};

export const CustomColors: Story = {
  args: {
    size: 'A4',
    gradient: ['red', 'purple'],
  },
};

export const CustomGradientStops: Story = {
  args: {
    size: 'A4',
    gradient: [
      { offset: '0%', stopColor: 'red' },
      { offset: '10%', stopColor: 'darkred' },
      { offset: '12%', stopColor: 'blue' },
      { offset: '60%', stopColor: 'darkblue' },
      { offset: '70%', stopColor: 'blue' },
      { offset: '100%', stopColor: 'yellow' },
    ],
  },
};

export const Darken: Story = {
  args: {
    size: 'A4',
    darken: true,
  },
};

export const Lighten: Story = {
  args: {
    size: 'A4',
    lighten: true,
  },
};

export const Saturate: Story = {
  args: {
    size: 'A4',
    darken: true,
    saturate: true,
  },
};

export const Desaturate: Story = {
  args: {
    size: 'A4',
    darken: true,
    desaturate: true,
  },
};

export const CustomColorsDarken: Story = {
  args: {
    size: 'A4',
    gradient: ['red', 'yellow', 'orange'],
    darken: true,
    darkenAmounts: [0.2, 0.5, 0.8],
  },
};

export const CustomColorsLighten: Story = {
  args: {
    size: 'A4',
    gradient: ['blue', 'teal', 'cyan'],
    lighten: true,
    lightenAmounts: [0.2, 0.5, 0.8],
  },
};

export const CustomColorsSaturate: Story = {
  args: {
    size: 'A4',
    gradient: ['red', 'yellow', 'orange'],
    saturate: true,
    saturateAmounts: [0.2, 0.5, 0.8],
  },
};

export const CustomColorsDesaturate: Story = {
  args: {
    size: 'A4',
    gradient: ['blue', 'teal', 'cyan'],
    desaturate: true,
    desaturateAmounts: [0.2, 0.5, 0.8],
  },
};

export const LeftToRight: Story = {
  args: {
    size: 'A4',
    swatch: 'primary',
    darken: true,
    gradientType: GradientType.leftToRight,
  },
};

export const RightToLeft: Story = {
  args: {
    size: 'A4',
    swatch: 'primary',
    darken: true,
    gradientType: GradientType.rightToLeft,
  },
};

export const TopToBottom: Story = {
  args: {
    size: 'A4',
    swatch: 'primary',
    darken: true,
    gradientType: GradientType.topToBottom,
  },
};

export const BottomToTop: Story = {
  args: {
    size: 'A4',
    swatch: 'primary',
    darken: true,
    gradientType: GradientType.bottomToTop,
  },
};

export const TopLeftToBottomRight: Story = {
  args: {
    size: 'A4',
    swatch: 'primary',
    darken: true,
    gradientType: GradientType.topLeftToBottomRight,
  },
};

export const BottomLeftToTopRight: Story = {
  args: {
    size: 'A4',
    swatch: 'primary',
    darken: true,
    gradientType: GradientType.bottomLeftToTopRight,
  },
};

export const BottomRightToTopLeft: Story = {
  args: {
    size: 'A4',
    swatch: 'primary',
    darken: true,
    gradientType: GradientType.bottomRightToTopLeft,
  },
};

export const TopRightToBottomLeft: Story = {
  args: {
    size: 'A4',
    swatch: 'primary',
    darken: true,
    gradientType: GradientType.topRightToBottomLeft,
  },
};

export const Radial: Story = {
  args: {
    size: 'A4',
    swatch: 'primary',
    darken: true,
    gradientType: GradientType.radial,
  },
};

export const Landscape: Story = {
  args: {
    size: 'A4',
    darken: true,
    orientation: 'landscape',
  },
};
