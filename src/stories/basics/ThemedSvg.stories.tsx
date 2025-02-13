import { Ellipse } from '@react-pdf/renderer';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemedSvg } from '../../components/basics/ThemedSvg';
import { Paragraph } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = () => {
  return (
    <PDFStory>
      <ThemedSvg className="border border-2 mb-3 bg-white" style={{ width: 220, height: 130 }}>
        <Ellipse cx={110} cy={65} rx={35} ry={35} fill="#9E0024" />
      </ThemedSvg>
      <Paragraph>
        SVG of the Japanese flag, with class name "border border-2 mb-3 bg-white" from the theme to add a border, white
        background, and bottom margin.
      </Paragraph>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Basics/ThemedSvg', // <-- Set to your story title
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
