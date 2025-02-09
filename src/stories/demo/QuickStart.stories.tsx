import type { Meta, StoryObj } from '@storybook/react';
import { QuickStart as Q } from '../../components/demo/QuickStart';

// === Setup ===
const StoryComponent = Q; // <-- Set to your component
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
export const QuickStart: Story = {
  args: {},
};
