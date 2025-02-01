import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '../../components/builder/parts/layout/Box';
import { Table } from '../../components/builder/parts/table/Table';
import { TableCell } from '../../components/builder/parts/table/TableCell';
import { TableRow } from '../../components/builder/parts/table/TableRow';
import { Heading6 } from '../../components/builder/parts/typography/Heading6';
import { ParagraphProps } from '../../components/builder/parts/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory>
      <Heading6>Plain and bordered inside, 400px</Heading6>
      <Box direction="x" style={{ justifyContent: 'center' }}>
        <Table borderedInside style={{ width: 400 }}>
          <TableRow>
            <TableCell style={{ textAlign: 'right' }}>Lorem ipsum dolor</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Consectetur adipiscing elit</TableCell>
            <TableCell>Sed do eiusmod</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ textAlign: 'right' }}>Incididunt ut labore</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Dolore magna aliqua</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ textAlign: 'right' }}>Lorem ipsum dolor</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Consectetur adipiscing elit</TableCell>
            <TableCell>Sed do eiusmod</TableCell>
          </TableRow>
        </Table>
      </Box>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Tables', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const PlainBorderedInside: Story = {
  args: {},
};
