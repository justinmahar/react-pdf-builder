import { Document, PDFViewer } from '@react-pdf/renderer';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemedPage } from '../../components/basics/ThemedPage';
import { Paragraph } from '../../components/typography/Paragraph';

const StoryComponent = () => {
  return (
    <PDFViewer style={{ height: 700, width: 500 }}>
      <Document>
        <ThemedPage swatch="light" className="text-indigo">
          <Paragraph>Themed page with "light" swatch and "text-indigo" class name from theme.</Paragraph>
        </ThemedPage>
      </Document>
    </PDFViewer>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Basics/ThemedPage', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Main: Story = {
  args: {},
};
