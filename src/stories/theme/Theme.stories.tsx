import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Demo, DemoProps } from '../../components/demo/Demo';
import { Themes } from '../../components/theme/themes/Themes';

const StoryComponent = (props: DemoProps) => {
  return <Demo {...props} />;
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Theme', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Light: Story = {
  args: {
    themeBuilder: Themes.light,
  },
};

export const Dark: Story = {
  args: { themeBuilder: Themes.dark },
};
