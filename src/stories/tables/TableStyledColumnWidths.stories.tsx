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
      <Heading6>Styled with column widths 30%, 50%, 20%</Heading6>
      <Table
        bordered
        inverseStriped
        borderColor="#005BDF"
        style={{ backgroundColor: 'white', borderRadius: 10 }}
        stripeStyle={{ backgroundColor: '#007BFF22' }}
        colWidths={['30%', '50%', '20%']}
      >
        <TableRow
          style={{
            backgroundColor: '#007BFF',
            color: 'white',
          }}
        >
          <TableCell>
            <Heading6 style={{ marginBottom: 0 }}>Lorem ipsum dolor</Heading6>
          </TableCell>
          <TableCell>
            <Heading6 style={{ marginBottom: 0 }}>Consectetur adipiscing elit</Heading6>
          </TableCell>
          <TableCell>
            <Heading6 style={{ marginBottom: 0 }}>Sed do eiusmod</Heading6>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Lorem ipsum dolor</TableCell>
          <TableCell>Consectetur adipiscing elit</TableCell>
          <TableCell>Sed do eiusmod</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Incididunt ut labore</TableCell>
          <TableCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna
            aliqua.
          </TableCell>
          <TableCell>Dolore magna aliqua</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Lorem ipsum dolor</TableCell>
          <TableCell>Consectetur adipiscing elit</TableCell>
          <TableCell>Sed do eiusmod</TableCell>
        </TableRow>
      </Table>
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
export const StyledWithColumnWidths: Story = {
  args: {},
};
