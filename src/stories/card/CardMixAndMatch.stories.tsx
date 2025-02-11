import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../../components/card/Card';
import { CardBody } from '../../components/card/CardBody';
import { CardHeader } from '../../components/card/CardHeader';
import { Paragraph, ParagraphProps } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory>
      <Card>
        <CardHeader swatch="primary">Card header with "primary" swatch</CardHeader>
        <CardBody>Card body. Lorem ipsum dolor sit amet.</CardBody>
        <CardBody>Another card body.</CardBody>
        <CardHeader swatch="gray700">Header with "gray700" swatch</CardHeader>
        <CardBody>Card body. Lorem ipsum dolor sit amet.</CardBody>
        <CardBody swatch="yellow">Swatch "yellow" card body. </CardBody>
        <CardBody>Card body. Lorem ipsum dolor sit amet.</CardBody>
        <CardHeader>Headers can be used as footers</CardHeader>
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
export const MixAndMatch: Story = {
  args: {},
};
