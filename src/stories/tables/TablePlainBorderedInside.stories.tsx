import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '../../components/layout/Box';
import { Table } from '../../components/table/Table';
import { TableCell } from '../../components/table/TableCell';
import { TableRow } from '../../components/table/TableRow';
import { Heading6 } from '../../components/typography/Heading6';
import { ParagraphProps } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: ParagraphProps) => {
  return (
    <PDFStory>
      <Heading6>Plain and bordered inside, 80% width</Heading6>
      <Box className="justify-content-center">
        <Table borderedInside style={{ width: '80%' }}>
          <TableRow>
            <TableCell className="justify-content-end text-end">Lorem ipsum</TableCell>
            <TableCell className="justify-content-end text-center">Consectetur adipiscing elit</TableCell>
            <TableCell className="justify-content-end">Sed do eiusmod</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-end">Incididunt ut labore</TableCell>
            <TableCell className="text-center">Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Dolore magna aliqua</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-end">Lorem ipsum dolor</TableCell>
            <TableCell className="text-center">Consectetur adipiscing elit</TableCell>
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
