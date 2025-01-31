import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ListItem } from '../../components/builder/parts/lists/ListItem';
import { OrderedList, OrderedListProps } from '../../components/builder/parts/lists/OrderedList';
import { Heading4 } from '../../components/builder/parts/typography/Heading4';
import { Heading5 } from '../../components/builder/parts/typography/Heading5';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = ({ liWidth, ...props }: OrderedListProps & { liWidth?: number }) => {
  return (
    <PDFStory>
      <Heading4>Ordered List</Heading4>
      <OrderedList {...props}>
        <ListItem style={{ width: liWidth }}>List Item</ListItem>
        <ListItem style={{ width: liWidth }}>List Item</ListItem>
        <ListItem style={{ width: liWidth }}>List Item</ListItem>
      </OrderedList>
      <Heading5>Long list that wraps to next page:</Heading5>
      <OrderedList {...props}>
        <ListItem style={{ width: liWidth }}>List Item</ListItem>
        <ListItem style={{ width: liWidth }}>List Item</ListItem>
        <ListItem style={{ width: liWidth }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem style={{ width: liWidth }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem style={{ width: liWidth }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem style={{ width: liWidth }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem style={{ width: liWidth }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem style={{ width: liWidth }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem style={{ width: liWidth }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem style={{ width: liWidth }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem style={{ width: liWidth }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem style={{ width: liWidth }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
      </OrderedList>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Lists/Ordered List', // <-- Set to your story title
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

export const Size24: Story = {
  args: { style: { fontSize: 24 }, liWidth: 500 },
};

export const Size24MarkerStyle: Story = {
  args: { style: { fontSize: 24 }, liWidth: 500, markerStyle: { width: 50, textAlign: 'right' } },
};

export const Size36: Story = {
  args: { style: { fontSize: 36 }, liWidth: 500 },
};

export const Size48: Story = {
  args: { style: { fontSize: 48 }, liWidth: 500 },
};

export const WrapItems: Story = {
  name: 'Wrap Items (Not Recommended)',
  args: { wrapItems: true },
};
