import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemedText } from '../../components/basics/ThemedText';
import { Div } from '../../components/basics/Div';
import { Paragraph, ParagraphProps } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory>
      <Div className="text-blue border border-blue p-3 rounded bg-faded-blue fw-bold">
        <Paragraph>
          This is a Div with a variety of class names from the theme to achieve a unique look. It contains 3 Paragraph
          components and a ThemedText containing the class names.
        </Paragraph>
        <Paragraph>
          A Div can be used like an HTML div in this framework. It supports both the className and style props to make
          styling easy.
        </Paragraph>
        <Paragraph className="mb-0">Class names used:</Paragraph>
        <ThemedText>"text-blue border border-blue p-3 rounded bg-faded-blue fw-bold"</ThemedText>
      </Div>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Basics/Div', // <-- Set to your story title
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
