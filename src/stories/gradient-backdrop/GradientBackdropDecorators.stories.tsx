import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BackdropDecorators } from '../../components/backdrops/BackdropDecorators';
import { GradientBackdrop } from '../../components/backdrops/GradientBackdrop';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = ({ decorators, ...props }: { decorators: React.JSX.Element[] }) => {
  return (
    <PDFStory>
      <GradientBackdrop size="LETTER" darken swatch="primary">
        {decorators}
      </GradientBackdrop>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/GradientBackdrop/Decorators', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Angles1: Story = {
  args: {
    decorators: BackdropDecorators.angles1,
  },
};

export const Angles2: Story = {
  args: {
    decorators: BackdropDecorators.angles2,
  },
};

export const Angles3: Story = {
  args: {
    decorators: BackdropDecorators.angles3,
  },
};

export const Circles1: Story = {
  args: {
    decorators: BackdropDecorators.circles1,
  },
};

export const Circles2: Story = {
  args: {
    decorators: BackdropDecorators.circles2,
  },
};

export const Circles3: Story = {
  args: {
    decorators: BackdropDecorators.circles3,
  },
};
