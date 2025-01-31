import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box, BoxProps } from '../../components/builder/parts/layout/Box';
import { PDFStory } from '../parts/PDFStory';
import { Paragraph } from '../../components/builder/parts/typography/Paragraph';
import { Heading5 } from '../../components/builder/parts/typography/Heading5';

const StoryComponent = (props: BoxProps) => {
  return (
    <PDFStory>
      <Heading5 style={{ textAlign: 'center' }}>Horizontal box containing 3 nested boxes</Heading5>
      <Box {...props}>
        <Box grow padding={10} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
          <Paragraph style={{ marginBottom: 0 }}>Grow</Paragraph>
        </Box>
        <Box padding={10} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}>
          <Paragraph style={{ marginBottom: 0 }}>Shrink</Paragraph>
        </Box>
        <Box
          direction="y"
          padding={10}
          style={{
            width: 275,
            backgroundColor: 'lightyellow',
            textAlign: 'justify',
          }}
        >
          <Heading5>Lorem ipsum dolor</Heading5>
          <Paragraph>Width 275. Specify a width to allow text wrapping.</Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Paragraph>
        </Box>
      </Box>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Box/Horizontal', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===

export const WithoutGap: Story = {
  args: {
    direction: 'horizontal',
  },
};

export const WithGap: Story = {
  args: {
    gap: 10,
    direction: 'horizontal',
  },
};
