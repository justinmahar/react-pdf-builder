import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HeadingProps } from '../../components/builder/parts/typography/Heading';
import { Heading1 } from '../../components/builder/parts/typography/Heading1';
import { Heading2 } from '../../components/builder/parts/typography/Heading2';
import { Heading3 } from '../../components/builder/parts/typography/Heading3';
import { Heading4 } from '../../components/builder/parts/typography/Heading4';
import { Heading5 } from '../../components/builder/parts/typography/Heading5';
import { Heading6 } from '../../components/builder/parts/typography/Heading6';
import { Paragraph } from '../../components/builder/parts/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: HeadingProps) => {
  return (
    <PDFStory>
      <Heading1 {...props}>Heading 1</Heading1>
      <Heading2 {...props}>Heading 2</Heading2>
      <Heading3 {...props}>Heading 3</Heading3>
      <Heading4 {...props}>Heading 4</Heading4>
      <Heading5 {...props}>Heading 5</Heading5>
      <Heading6 {...props}>Heading 6</Heading6>
      <Heading1 {...props}>Heading 1</Heading1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
      <Heading2 {...props}>Heading 2</Heading2>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
      <Heading3 {...props}>Heading 3</Heading3>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
      <Heading4 {...props}>Heading 4</Heading4>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
      <Heading5 {...props}>Heading 5</Heading5>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
      <Heading6 {...props}>Heading 6</Heading6>
      <Paragraph>
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
  title: 'Stories/Typography/Heading', // <-- Set to your story title
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

export const WithRule: Story = {
  args: { rule: true },
};
