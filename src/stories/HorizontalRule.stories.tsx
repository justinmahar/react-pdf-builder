import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HorizontalRule, HorizontalRuleProps } from '../components/hr/HorizontalRule';
import { PDFStory } from './parts/PDFStory';

const StoryComponent = (props: HorizontalRuleProps) => {
  return (
    <PDFStory>
      <HorizontalRule {...props} />
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/HorizontalRule', // <-- Set to your story title
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
