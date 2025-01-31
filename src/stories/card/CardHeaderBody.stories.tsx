import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardHeader } from '../../components/builder/parts/layout/CardHeader';
import { Paragraph, ParagraphProps } from '../../components/builder/parts/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';
import { Heading4 } from '../../components/builder/parts/typography/Heading4';
import { Card } from '../../components/builder/parts/layout/Card';
import { CardBody } from '../../components/builder/parts/layout/CardBody';
import { Heading6 } from '../../components/builder/parts/typography/Heading6';
import { Heading5 } from '../../components/builder/parts/typography/Heading5';
import { Box } from '../../components/builder/parts/layout/Box';
import { Button } from '../../components/builder/parts/widgets/Button';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory pageProps={{ style: { backgroundColor: '#333388' } }}>
      <Card>
        <CardHeader>Card Header</CardHeader>
        <CardBody withHeader>
          <Heading6>This is the card body</Heading6>
          <Paragraph style={{ marginBottom: 30 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Paragraph>
          <Box direction="x" style={{ justifyContent: 'flex-end' }}>
            <Button href="#" style={{ width: 120 }}>
              Learn More
            </Button>
          </Box>
        </CardBody>
      </Card>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Card', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const HeaderWithBody: Story = {
  args: {},
};
