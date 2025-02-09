import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading1 } from '../../components/typography/Heading1';
import { Paragraph, ParagraphProps } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory>
      <Heading1>Lorem ipsum dolor sit amet</Heading1>
      <Paragraph {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Theme', // <-- Set to your story title
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

export const WithSwatch: Story = {
  args: { swatch: 'primary' },
};
