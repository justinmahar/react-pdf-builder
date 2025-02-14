import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box, BoxProps } from '../../components/layout/Box';
import { PDFStory } from '../parts/PDFStory';
import { Paragraph } from '../../components/typography/Paragraph';
import { Heading5 } from '../../components/typography/Heading5';

const StoryComponent = (props: BoxProps) => {
  return (
    <PDFStory pageProps={{ style: { padding: 0 } }}>
      <Box {...props}>
        <Box grow className="p-3 justify-content-center align-items-center bg-faded-blue">
          <Paragraph className="mb-0">Grow</Paragraph>
        </Box>
        <Box className="p-3 justify-content-center align-items-center bg-faded-pink">
          <Paragraph className="mb-0">Shrink</Paragraph>
        </Box>
        <Box dir="y" className="p-3 justify-content-center text-justify bg-faded-teal w-50">
          <Heading5>Lorem ipsum dolor</Heading5>
          <Paragraph>Width 300. Specify a width to allow text wrapping.</Paragraph>
          <Paragraph className="mb-0">
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

export const FullPageWithoutGap: Story = {
  args: {
    dir: 'row',
    style: { height: '100%' },
  },
};

export const FullPageWithGap: Story = {
  args: {
    gap: 10,
    dir: 'row',
    style: { height: '100%' },
  },
};
