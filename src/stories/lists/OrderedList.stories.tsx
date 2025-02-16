import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ListItem } from '../../components/lists/ListItem';
import { OrderedList, OrderedListProps } from '../../components/lists/OrderedList';
import { Heading4 } from '../../components/typography/Heading4';
import { Heading5 } from '../../components/typography/Heading5';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = ({ ...props }: OrderedListProps) => {
  return (
    <PDFStory>
      <Heading4>Ordered List</Heading4>
      <OrderedList {...props}>
        <ListItem>List Item</ListItem>
        <ListItem>List Item</ListItem>
        <ListItem>List Item</ListItem>
      </OrderedList>
      <OrderedList {...props} swatch="primary">
        <ListItem>This list has the "primary" swatch</ListItem>
        <ListItem>List Item</ListItem>
        <ListItem>List Item</ListItem>
      </OrderedList>
      <OrderedList {...props} containerProps={{ swatch: 'danger' }}>
        <ListItem>This list's item container has the "danger" swatch</ListItem>
        <ListItem>List Item</ListItem>
        <ListItem>List Item</ListItem>
      </OrderedList>
      <OrderedList {...props} markerSwatch="orange">
        <ListItem>This list's marker has the "orange" swatch.</ListItem>
        <ListItem>List Item</ListItem>
        <ListItem>List Item</ListItem>
      </OrderedList>
      <OrderedList {...props}>
        <ListItem swatch="indigo">This list item has the "indigo" swatch.</ListItem>
        <ListItem>List Item</ListItem>
        <ListItem>List Item</ListItem>
      </OrderedList>
      <Heading5>Long list that wraps to next page:</Heading5>
      <OrderedList {...props}>
        <ListItem>List Item</ListItem>
        <ListItem>List Item</ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ListItem>
        <ListItem>
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
  args: { style: { fontSize: 24 } },
};

export const StyledMarker: Story = {
  args: { markerStyle: { width: 50, textAlign: 'right' } },
};

export const RomanUpper: Story = {
  args: { romanUpper: true, markerStyle: { minWidth: 25 } },
};

export const RomanLower: Story = {
  args: { romanLower: true, markerStyle: { minWidth: 25 } },
};

export const AlphaUpper: Story = {
  args: { alphaUpper: true },
};

export const AlphaLower: Story = {
  args: { alphaLower: true },
};

export const CustomNumbering: Story = {
  args: { numberRenderer: (num) => `#${num}` },
};
