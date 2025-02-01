import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../../components/builder/parts/card/Card';
import { CardBody } from '../../components/builder/parts/card/CardBody';
import { CardHeader } from '../../components/builder/parts/card/CardHeader';
import { Heading1 } from '../../components/builder/parts/typography/Heading1';
import { Heading6 } from '../../components/builder/parts/typography/Heading6';
import { Paragraph, ParagraphProps } from '../../components/builder/parts/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';
import { Heading5 } from '../../components/builder/parts/typography/Heading5';
import { Box } from '../../components/builder/parts/layout/Box';
import { Button } from '../../components/builder/parts/widgets/Button';
import { Heading3 } from '../../components/builder/parts/typography/Heading3';
import { Heading4 } from '../../components/builder/parts/typography/Heading4';
import { OrderedList } from '../../components/builder/parts/lists/OrderedList';
import { ListItem } from '../../components/builder/parts/lists/ListItem';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory pageProps={{ style: { backgroundColor: '#333388' } }}>
      <Card>
        <CardHeader>
          <Box direction="x" gap={10} style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Heading5>Custom card header (H5)</Heading5>
              <Paragraph style={{ marginBottom: 0 }}>Custom header with text (paragraph)</Paragraph>
            </Box>
            <Button pill variant="info" style={{ width: 100 }}>
              <Heading3 style={{ marginBottom: 0 }}>42%</Heading3>
            </Button>
          </Box>
        </CardHeader>
        <CardBody withHeader>
          <Heading6>Card body</Heading6>
          <Paragraph>
            This has a custom header with a horizontal box that aligns items center and justifies content as
            space-between.
          </Paragraph>
          <Paragraph>Inside the horizontal box is:</Paragraph>
          <OrderedList>
            <ListItem>A vertical box with a Heading5 and a Paragraph</ListItem>
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
