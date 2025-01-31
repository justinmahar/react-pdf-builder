import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box, BoxProps } from '../../components/builder/parts/layout/Box';
import { PDFStory } from '../parts/PDFStory';
import { Paragraph } from '../../components/builder/parts/typography/Paragraph';
import { Heading5 } from '../../components/builder/parts/typography/Heading5';

const StoryComponent = (props: BoxProps) => {
  return (
    <PDFStory>
      <Box {...props}>
        <Box
          direction="y"
          grow
          padding={10}
          style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}
        >
          <Heading5 style={{ textAlign: 'center' }}>Vertical box containing 3 nested boxes</Heading5>
          <Paragraph style={{ marginBottom: 0 }}>Grow</Paragraph>
        </Box>
        <Box padding={10} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}>
          <Paragraph style={{ marginBottom: 0 }}>Shrink</Paragraph>
        </Box>
        <Box
          direction="y"
          padding={10}
          style={{
            backgroundColor: 'lightyellow',
            textAlign: 'justify',
          }}
        >
          <Heading5>Lorem ipsum dolor</Heading5>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Paragraph>
        </Box>
      </Box>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Box/Vertical', // <-- Set to your story title
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
    direction: 'vertical',
    style: { height: 700 },
  },
};

export const WithGap: Story = {
  args: {
    gap: 10,
    direction: 'vertical',
    style: { height: 700 },
  },
};
