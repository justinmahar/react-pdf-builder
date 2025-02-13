import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemedText, ThemedTextProps } from '../../components/basics/ThemedText';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: ThemedTextProps) => {
  return (
    <PDFStory>
      <ThemedText {...props}>This is themed text.</ThemedText>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Basics/ThemedText', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const ClassNameTextGreen: Story = {
  args: {
    className: 'text-green',
  },
};

export const SwatchPrimary: Story = {
  args: { swatch: 'primary' },
};
