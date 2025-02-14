import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../../components/button/Button';
import { Card } from '../../components/card/Card';
import { CardBody } from '../../components/card/CardBody';
import { CardHeader } from '../../components/card/CardHeader';
import { Box } from '../../components/layout/Box';
import { ListItem } from '../../components/lists/ListItem';
import { OrderedList } from '../../components/lists/OrderedList';
import { Heading3 } from '../../components/typography/Heading3';
import { Heading5 } from '../../components/typography/Heading5';
import { Heading6 } from '../../components/typography/Heading6';
import { Paragraph } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';
import { ThemedText } from '../../components/basics/ThemedText';

const StoryComponent = () => {
  return (
    <PDFStory>
      <Card>
        <CardHeader>
          <Box direction="x" className="p-2 align-items-center justify-content-between">
            <Box>
              <Heading5>Custom card header (H5)</Heading5>
              <ThemedText className="mb-0">Custom header with text (ThemedText)</ThemedText>
            </Box>
            <Button pill swatch="success">
              <Heading3 className="mb-0">42%</Heading3>
            </Button>
          </Box>
        </CardHeader>
        <CardBody>
          <Heading6>Card body</Heading6>
          <Paragraph>
            This has a custom header with a horizontal box that aligns items center and justifies content as
            space-between.
          </Paragraph>
          <Paragraph>Inside the horizontal box is:</Paragraph>
          <OrderedList className="mb-0">
            <ListItem>A vertical box with a Heading5 and a ThemedText</ListItem>
            <ListItem>A Button containing a Heading3 with no bottom margin and the text 42%</ListItem>
          </OrderedList>
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
export const CustomHeader: Story = {
  args: {},
};
