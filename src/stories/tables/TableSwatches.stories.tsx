import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table, TableProps } from '../../components/table/Table';
import { TableCell } from '../../components/table/TableCell';
import { TableRow } from '../../components/table/TableRow';
import { Heading6 } from '../../components/typography/Heading6';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = (props: TableProps) => {
  return (
    <PDFStory>
      <Table bordered inverseStriped colWidths={['30%', '50%', '20%']} {...props}>
        <TableRow swatch={props.swatch} inverseStriped={false}>
          <TableCell>
            <Heading6 style={{ marginBottom: 0 }}>Col 30% </Heading6>
          </TableCell>
          <TableCell>
            <Heading6 style={{ marginBottom: 0 }}>Column 50%</Heading6>
          </TableCell>
          <TableCell>
            <Heading6 style={{ marginBottom: 0 }}>20%</Heading6>
          </TableCell>
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
  title: 'Stories/Tables/Swatches', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===

export const Blue: Story = {
  args: { swatch: 'blue' },
};

export const Indigo: Story = {
  args: { swatch: 'indigo' },
};

export const Purple: Story = {
  args: { swatch: 'purple' },
};

export const Pink: Story = {
  args: { swatch: 'pink' },
};

export const Red: Story = {
  args: { swatch: 'red' },
};

export const Orange: Story = {
  args: { swatch: 'orange' },
};

export const Yellow: Story = {
  args: { swatch: 'yellow' },
};

export const Green: Story = {
  args: { swatch: 'green' },
};

export const Teal: Story = {
  args: { swatch: 'teal' },
};

export const Cyan: Story = {
  args: { swatch: 'cyan' },
};

export const White: Story = {
  args: { swatch: 'white' },
};

export const Gray100: Story = {
  args: { swatch: 'gray100' },
};

export const Gray200: Story = {
  args: { swatch: 'gray200' },
};

export const Gray300: Story = {
  args: { swatch: 'gray300' },
};

export const Gray400: Story = {
  args: { swatch: 'gray400' },
};

export const Gray500: Story = {
  args: { swatch: 'gray500' },
};

export const Gray600: Story = {
  args: { swatch: 'gray600' },
};

export const Gray700: Story = {
  args: { swatch: 'gray700' },
};

export const Gray800: Story = {
  args: { swatch: 'gray800' },
};

export const Gray900: Story = {
  args: { swatch: 'gray900' },
};

export const Black: Story = {
  args: { swatch: 'black' },
};

export const Primary: Story = {
  args: { swatch: 'primary' },
};

export const Secondary: Story = {
  args: { swatch: 'secondary' },
};

export const Success: Story = {
  args: { swatch: 'success' },
};

export const Info: Story = {
  args: { swatch: 'info' },
};

export const Warning: Story = {
  args: { swatch: 'warning' },
};

export const Danger: Story = {
  args: { swatch: 'danger' },
};

export const Light: Story = {
  args: { swatch: 'light' },
};

export const Dark: Story = {
  args: { swatch: 'dark' },
};
