import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemedImage } from '../../components/basics/ThemedImage';
import { Paragraph } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = () => {
  return (
    <PDFStory>
      <ThemedImage
        className="border p-3 rounded mb-3"
        src="https://justinmahar.github.io/react-pdf-builder/images/scootie-460.png"
        style={{ width: 230 }}
      />
      <Paragraph>
        This image uses the "border p-3 rounded mb-3" class names from the theme to achieve a thumbnail style with a
        bottom margin.
      </Paragraph>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Basics/ThemedImage', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Main: Story = {
  args: {},
};
