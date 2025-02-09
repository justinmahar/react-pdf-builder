import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PDFStory } from '../parts/PDFStory';
import { SquareShape, SquareShapeProps } from '../../components/shapes/SquareShape';
import { GradientType } from '../../components/shapes/Gradients';

const StoryComponent = (props: SquareShapeProps) => {
  return (
    <PDFStory>
      <SquareShape {...props} />
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Shape/Square', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Basic: Story = {
  args: {},
};

export const Stroke: Story = {
  args: {
    size: 300,
    rectProps: { stroke: 'red', strokeWidth: 15 },
  },
};

export const Fill: Story = {
  args: {
    size: 300,
    fill: 'red',
  },
};

export const LinearGradient: Story = {
  args: {
    size: 300,
    gradient: ['red', 'blue'],
    gradientType: GradientType.leftToRight,
  },
};

export const RadialGradient: Story = {
  args: {
    size: 300,
    gradient: ['red', 'blue'],
    gradientType: GradientType.radial,
  },
};

export const CustomLinearGradient: Story = {
  args: {
    size: 300,
    gradient: [
      { offset: '0%', stopColor: 'red', stopOpacity: 1 },
      { offset: '50%', stopColor: 'blue', stopOpacity: 1 },
      { offset: '100%', stopColor: 'green', stopOpacity: 1 },
    ],
    linearGradientProps: {
      x1: 0,
      y1: 0.7,
      x2: 1,
      y2: 0.3,
    },
  },
};

export const CustomRadialGradient: Story = {
  args: {
    size: 300,
    gradientType: GradientType.radial,
    gradient: [
      { offset: '0%', stopColor: 'red', stopOpacity: 1 },
      { offset: '100%', stopColor: 'blue', stopOpacity: 1 },
    ],
    radialGradientProps: {
      cx: 0.5,
      cy: 0.5,
      fx: 0.3,
      fy: 0.3,
    },
  },
};

export const Size300: Story = {
  args: {
    size: 300,
  },
};

export const CSSTransformRotate: Story = {
  args: {
    style: {
      transform: 'rotate(45deg)',
    },
  },
};
