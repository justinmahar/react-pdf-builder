import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box, BoxProps } from '../../components/builder/parts/layout/Box';
import { PDFStory } from '../parts/PDFStory';
import { Paragraph } from '../../components/builder/parts/typography/Paragraph';
import { Heading5 } from '../../components/builder/parts/typography/Heading5';

const StoryComponent = (props: BoxProps) => {
  return (
    <PDFStory pageProps={{ style: { padding: 0 } }}>
      <Box {...props}>
        <Box grow padding={30} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
          <Paragraph style={{ marginBottom: 0 }}>Grow</Paragraph>
        </Box>
        <Box padding={30} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}>
          <Paragraph style={{ marginBottom: 0 }}>Shrink</Paragraph>
        </Box>
        <Box
          direction="y"
          padding={30}
          style={{
            width: 300,
            backgroundColor: 'lightyellow',
            textAlign: 'justify',
          }}
        >
          <Heading5>Lorem ipsum dolor</Heading5>
          <Paragraph>Width 300. Specify a width to allow text wrapping.</Paragraph>
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

export const FullPageWithoutGap: Story = {
  args: {
    direction: 'horizontal',
    style: { height: '100%' },
  },
};

export const FullPageWithGap: Story = {
  args: {
    gap: 10,
    direction: 'horizontal',
    style: { height: '100%' },
  },
};
