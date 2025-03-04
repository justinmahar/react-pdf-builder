import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../../components/button/Button';
import { Card } from '../../components/card/Card';
import { CardBody } from '../../components/card/CardBody';
import { CardHeader } from '../../components/card/CardHeader';
import { Box } from '../../components/layout/Box';
import { Heading6 } from '../../components/typography/Heading6';
import { Paragraph } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = () => {
  return (
    <PDFStory>
      <Card>
        <CardHeader>Card Header</CardHeader>
        <CardBody>
          <Heading6>This is the card body</Heading6>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Paragraph>
          <Box className="justify-content-end">
            <Button href="#">Learn More</Button>
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
