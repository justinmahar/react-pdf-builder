import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemedCanvas } from '../../components/basics/ThemedCanvas';
import { Paragraph } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = () => {
  return (
    <PDFStory>
      <ThemedCanvas
        className="border border-2 mb-3"
        paint={(painter, w, h) => {
          painter.fillColor('#0d6efd');
          painter.fillOpacity(1);
          painter.fontSize(40);
          painter.text('Canvas text', 92, 125);
          return null;
        }}
        style={{ width: 400, height: 300 }}
      />
      <Paragraph>
        This 400x300 canvas uses "border border-2 mb-3" class names from the theme for a border of width 2, with a
        bottom margin.
      </Paragraph>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Basics/ThemedCanvas', // <-- Set to your story title
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
