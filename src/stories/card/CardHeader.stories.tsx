import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../../components/builder/parts/card/Card';
import { CardHeader } from '../../components/builder/parts/card/CardHeader';
import { Heading5 } from '../../components/builder/parts/typography/Heading5';
import { ParagraphProps } from '../../components/builder/parts/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory pageProps={{ style: { backgroundColor: '#333388' } }}>
      <Card>
        <CardHeader noBody>Card header with no body</CardHeader>
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
export const HeaderOnly: Story = {
  args: {},
};
