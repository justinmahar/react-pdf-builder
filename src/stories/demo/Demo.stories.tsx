import type { Meta, StoryObj } from '@storybook/react';
import { Demo as D } from '../../components/demo/Demo';

// === Setup ===
const StoryComponent = D; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Demo/Demo', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Demo: Story = {
  args: {},
};
