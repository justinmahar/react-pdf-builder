import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardHeader } from '../../components/builder/parts/card/CardHeader';
import { Paragraph, ParagraphProps } from '../../components/builder/parts/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';
import { Heading4 } from '../../components/builder/parts/typography/Heading4';
import { Card } from '../../components/builder/parts/card/Card';
import { CardBody } from '../../components/builder/parts/card/CardBody';
import { Heading6 } from '../../components/builder/parts/typography/Heading6';
import { Heading5 } from '../../components/builder/parts/typography/Heading5';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory pageProps={{ style: { backgroundColor: '#333388' } }}>
      <Card>
        <CardHeader>Card Header</CardHeader>
        <CardBody withHeader withFooter>
          <Heading6>This is the card body</Heading6>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Paragraph>
        </CardBody>
        <CardBody withHeader withFooter>
          <Paragraph style={{ marginBottom: 0 }}>
            This is a middle section. It uses both the withHeader and withFooter props.
          </Paragraph>
        </CardBody>
        <CardBody withHeader>
          <Paragraph style={{ marginBottom: 0 }}>
            This is a footer. It's just another CardBody that uses the withHeader prop.
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
export const HeaderWithBodyAndFooter: Story = {
  args: {},
};
