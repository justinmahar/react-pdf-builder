import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ListItem } from '../../components/lists/ListItem';
import { UnorderedList, UnorderedListProps } from '../../components/lists/UnorderedList';
import { PDFStory } from '../parts/PDFStory';
import { Heading4 } from '../../components/typography/Heading4';
import { Heading5 } from '../../components/typography/Heading5';

const StoryComponent = ({ liWidth, ...props }: UnorderedListProps & { liWidth?: number }) => {
  return (
    <PDFStory>
      <Heading4>Unordered List</Heading4>
      <UnorderedList {...props}>
        <ListItem style={{ width: liWidth }}>List Item</ListItem>
        <ListItem style={{ width: liWidth }}>List Item</ListItem>
        <ListItem style={{ width: liWidth }}>List Item</ListItem>
      </UnorderedList>
      <Heading5>Long list that wraps to next page:</Heading5>
      <UnorderedList {...props}>
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
      </UnorderedList>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Lists/Unordered List', // <-- Set to your story title
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

export const Size36: Story = {
  args: { style: { fontSize: 36 }, liWidth: 496 },
};

export const Size48: Story = {
  args: { style: { fontSize: 48 }, liWidth: 486 },
};
export const CustomBullet: Story = {
  args: { bullet: '-' },
};

export const WrapItems: Story = {
  name: 'Wrap Items (Not Recommended)',
  args: { wrapItems: true },
};
