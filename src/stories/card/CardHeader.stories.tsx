import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../../components/card/Card';
import { CardHeader } from '../../components/card/CardHeader';
import { ParagraphProps } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory>
      <Card>
        <CardHeader>Card header with no body</CardHeader>
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
