import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Signature, SignatureProps } from '../../components/signature/Signature';
import { PDFStory } from '../parts/PDFStory';
import { Font } from '@react-pdf/renderer';
import { Paragraph } from '../../components/typography/Paragraph';

const StoryComponent = ({ paragraphText, ...props }: SignatureProps & { paragraphText?: string }) => {
  Font.registerEmojiSource({
    format: 'png',
    url: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/',
  });

  return (
    <PDFStory>
      <Signature {...props} style={{ marginBottom: 5 }} />
      {paragraphText && <Paragraph>{paragraphText}</Paragraph>}
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Signature', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const NoX: Story = {
  args: {},
};

export const WithX: Story = {
  args: { x: true },
};

export const CustomX: Story = {
  args: { x: true, xValue: '❌', xProps: { style: { fontSize: 20 } } },
};

export const WithSwatch: Story = {
  args: { x: true, swatch: 'primary' },
};

export const FullExample: Story = {
  args: { x: true, paragraphText: 'Sign here' },
};
