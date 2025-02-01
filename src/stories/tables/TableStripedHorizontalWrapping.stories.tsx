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
      <Heading6>Striped, horizontal bordered, with page wrapping demo</Heading6>
      <Table borderedOutside borderedHorizontal borderWidth={1} striped>
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
          <TableCell>
            Consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et magna aliqua.
          </TableCell>
          <TableCell>Sed do eiusmod</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Lorem ipsum dolor</TableCell>
          <TableCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna
            aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et magna aliqua.
          </TableCell>
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
export const StripedHorizontalWrapping: Story = {
  args: {},
};
