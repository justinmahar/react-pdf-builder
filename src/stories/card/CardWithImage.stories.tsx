import { Image } from '@react-pdf/renderer';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../../components/builder/parts/layout/Card';
import { CardBody } from '../../components/builder/parts/layout/CardBody';
import { Heading6 } from '../../components/builder/parts/typography/Heading6';
import { Paragraph, ParagraphProps } from '../../components/builder/parts/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory pageProps={{ style: { backgroundColor: '#333388' } }}>
      <Card>
        <CardBody withFooter style={{ padding: 0 }}>
          <Image
            src="/images/600x200.jpg"
            style={{ width: '100%', borderTopLeftRadius: 9, borderTopRightRadius: 9 }}
          ></Image>
        </CardBody>
        <CardBody withHeader>
          <Heading6>Card with image</Heading6>
          <Paragraph style={{ marginBottom: 0 }}>
            This card has two card bodies. The first is a card body with no padding and a 100% width placeholder image
            inside. The image has a top border radius to allow it to fit snugly within the card body. The second card
            body contains this text.
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
