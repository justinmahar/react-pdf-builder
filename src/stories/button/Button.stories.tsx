import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from '../../components/widgets/Button';
import { PDFStory } from '../parts/PDFStory';
import { Box } from '../../components/layout/Box';

const StoryComponent = (props: ButtonProps) => {
  const label = props.variant ? props.variant.substring(0, 1).toUpperCase() + props.variant.substring(1) : 'Button';
  return (
    <PDFStory>
      <Box>
        <Button {...props}>{label}</Button>
      </Box>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Button', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const PrimaryWithHref: Story = {
  args: { href: 'https://github.com/justinmahar/react-pdf-builder', variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const SecondaryWithHref: Story = {
  args: { href: 'https://github.com/justinmahar/react-pdf-builder', variant: 'secondary' },
};

export const Success: Story = {
  args: { variant: 'success' },
};

export const SuccessWithHref: Story = {
  args: { href: 'https://github.com/justinmahar/react-pdf-builder', variant: 'success' },
};

export const Danger: Story = {
  args: { variant: 'danger' },
};

export const DangerWithHref: Story = {
  args: { href: 'https://github.com/justinmahar/react-pdf-builder', variant: 'danger' },
};

export const Warning: Story = {
  args: { variant: 'warning' },
};

export const WarningWithHref: Story = {
  args: { href: 'https://github.com/justinmahar/react-pdf-builder', variant: 'warning' },
};

export const Info: Story = {
  args: { variant: 'info' },
};

export const InfoWithHref: Story = {
  args: { href: 'https://github.com/justinmahar/react-pdf-builder', variant: 'info' },
};

export const Light: Story = {
  args: { variant: 'light' },
};

export const LightWithHref: Story = {
  args: { href: 'https://github.com/justinmahar/react-pdf-builder', variant: 'light' },
};

export const Dark: Story = {
  args: { variant: 'dark' },
};

export const DarkWithHref: Story = {
  args: { href: 'https://github.com/justinmahar/react-pdf-builder', variant: 'dark' },
};

export const Link: Story = {
  args: { variant: 'link' },
};

export const LinkWithHref: Story = {
  args: { href: 'https://github.com/justinmahar/react-pdf-builder', variant: 'link' },
};

export const Custom: Story = {
  args: { style: { backgroundColor: 'purple', color: 'white', borderRadius: 100, width: 250, fontSize: 50 } },
};
