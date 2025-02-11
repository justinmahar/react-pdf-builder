import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../../components/card/Card';
import { CardBody } from '../../components/card/CardBody';
import { CardHeader } from '../../components/card/CardHeader';
import { Heading1 } from '../../components/typography/Heading1';
import { Heading6 } from '../../components/typography/Heading6';
import { Paragraph, ParagraphProps } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';
import { Text } from '@react-pdf/renderer';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory>
      <Card>
        <CardHeader as={Heading1}>Heading1</CardHeader>
        <CardBody>
          <Heading6>What's happening here?</Heading6>
          <Paragraph>
            If a CardHeader's child is a string, it will automatically be wrapped in a Heading5 with no bottom margin
            for you.
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            However you can use the <Text style={{ color: 'magenta' }}>as</Text> prop to specify a custom component for
            the heading text. The default is a Heading5, but this header is using a Heading1 instead.
          </Paragraph>
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
export const HeaderAsHeading1: Story = {
  args: {},
};
