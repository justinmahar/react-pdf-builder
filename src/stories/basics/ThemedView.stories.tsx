import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Paragraph, ParagraphProps } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';
import { ThemedView } from '../../components/basics/ThemedView';
import { ThemedText } from '../../components/basics/ThemedText';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory>
      <ThemedView className="text-blue border border-blue p-3 rounded bg-faded-blue fw-bold">
        <Paragraph>
          This is a ThemedView with a variety of class names from the theme to achieve a unique look. It contains 3
          Paragraph components and a ThemedText containing the class names.
        </Paragraph>
        <Paragraph>
          A ThemedView can be used like an HTML div in this framework. It supports both the className and style props to
          make styling easy. There is an alias for this component called Div, which is a lot easier to type than
          ThemedView (this component wraps the View component from React-PDF so the name ThemedView made the most
          sense).
        </Paragraph>
        <Paragraph className="mb-0">Class names used:</Paragraph>
        <ThemedText>"text-blue border border-blue p-3 rounded bg-faded-blue fw-bold"</ThemedText>
      </ThemedView>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Basics/ThemedView', // <-- Set to your story title
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
