import type { Meta, StoryObj } from '@storybook/react';
import { KitchenSink as KS } from '../components/KitchenSink';

// === Setup ===
const StoryComponent = KS; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/KitchenSink', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const KitchenSink: Story = {
  args: {
    label: 'Kitchen Sink',
  },
};
