import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ListItem } from '../../components/lists/ListItem';
import { UnorderedList } from '../../components/lists/UnorderedList';
import { Table } from '../../components/table/Table';
import { TableCell } from '../../components/table/TableCell';
import { TableRow } from '../../components/table/TableRow';
import { Heading6 } from '../../components/typography/Heading6';
import { PDFStory } from '../parts/PDFStory';
import { HorizontalRule } from '../../components/hr/HorizontalRule';

const StoryComponent = () => {
  return (
    <PDFStory>
      <Heading6>Border radius, swatches, custom column widths</Heading6>
      <Table bordered inverseStriped swatch="primary" className="bg-white rounded" colWidths={['30%', '50%', '20%']}>
        <TableRow swatch="primary" inverseStriped={false} className="fw-bold">
          <TableCell>Col 30%</TableCell>
          <TableCell>Column 50%</TableCell>
          <TableCell>20%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Lorem ipsum dolor</TableCell>
          <TableCell>Consectetur adipiscing elit</TableCell>
          <TableCell>Sed do eiusmod</TableCell>
        </TableRow>
        <TableRow>
          <TableCell swatch="blue">Blue swatch</TableCell>
          <TableCell>
            This cell has a horizontal rule with the "blue" swatch.
            <HorizontalRule swatch="blue" />
            Sed do eiusmod tempor incididunt ut labore et magna aliqua.
          </TableCell>
          <TableCell>Dolore magna aliqua</TableCell>
        </TableRow>
        <TableRow colWidths={['80%', '20%']}>
          <TableCell>
            This row has only two cells. The first is 80%, the second is 20%. This imitates a colspan.
          </TableCell>
          <TableCell>Dolore magna aliqua</TableCell>
        </TableRow>
        <TableRow colWidths={['50%', '50%']}>
          <TableCell>50% col width</TableCell>
          <TableCell>50% col width</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Lorem ipsum dolor</TableCell>
          <TableCell swatch="teal">Teal swatch</TableCell>
          <TableCell>Sed do eiusmod</TableCell>
        </TableRow>
      </Table>
      <UnorderedList>
        <ListItem>Table has the "inverseStriped" prop (odd rows are striped) and "primary" swatch</ListItem>
        <ListItem>Table has className "bg-white rounded" for white background and a border radius</ListItem>
        <ListItem>First table row has the "primary" swatch</ListItem>
        <ListItem>One row has only two cells. Its first cell has a custom width that imitates a colspan</ListItem>
        <ListItem>Another row has only two cells with 50% width each</ListItem>
        <ListItem>One cell has a HorizontalRule with the "blue" swatch.</ListItem>
        <ListItem>Two cells have been swatched to "blue" and "teal"</ListItem>
        <ListItem>Tables are highly customizable in React PDF Builder!</ListItem>
      </UnorderedList>
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
export const SwatchedWithColumnWidths: Story = {
  args: {},
};
