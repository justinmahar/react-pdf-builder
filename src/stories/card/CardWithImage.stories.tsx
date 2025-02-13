import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemedImage } from '../../components/basics/ThemedImage';
import { Card } from '../../components/card/Card';
import { CardBody } from '../../components/card/CardBody';
import { Heading6 } from '../../components/typography/Heading6';
import { Paragraph, ParagraphProps } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory>
      <Card>
        <CardBody className="p-0">
          <ThemedImage
            className="w-100 rounded-top"
            src="https://justinmahar.github.io/react-pdf-builder/images/600x200.jpg"
          />
        </CardBody>
        <CardBody>
          <Heading6>Card with image</Heading6>
          <Paragraph style={{ marginBottom: 0 }}>
            This card has two card bodies. The first is a card body with no padding and a 100% width placeholder image
            inside. The image has a top border radius (class name "rounded-top") to allow it to fit snugly within the
            card body. The second card body contains this text.
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
export const CardWithImage: Story = {
  args: {},
};
