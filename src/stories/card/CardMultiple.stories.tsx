import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardHeader } from '../../components/card/CardHeader';
import { Paragraph, ParagraphProps } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';
import { Heading4 } from '../../components/typography/Heading4';
import { Card } from '../../components/card/Card';
import { CardBody } from '../../components/card/CardBody';
import { Heading6 } from '../../components/typography/Heading6';
import { Heading5 } from '../../components/typography/Heading5';
import { Image } from '@react-pdf/renderer';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory>
      <Card>
        <CardHeader>This is the first card</CardHeader>
        <CardBody withHeader>
          <Heading6>Consectetur adipiscing elit</Heading6>
          <Paragraph style={{ marginBottom: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Paragraph>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Hey, it's the second one</CardHeader>
        <CardBody withHeader>
          <Heading6>Incididunt ut labore</Heading6>
          <Paragraph style={{ marginBottom: 0 }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Paragraph>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Third card, reporting for duty</CardHeader>
        <CardBody withHeader>
          <Heading6>Dolor in reprehenderit</Heading6>
          <Paragraph style={{ marginBottom: 0 }}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
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
export const MultipleCards: Story = {
  args: {},
};
