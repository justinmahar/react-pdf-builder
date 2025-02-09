import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemedLink, ThemedLinkProps } from '../../components/link/ThemedLink';
import { PDFStory } from '../parts/PDFStory';
import { UnorderedList } from '../../components/lists/UnorderedList';
import { ListItem } from '../../components/lists/ListItem';
import { Box } from '../../components/layout/Box';
import { GradientBackdrop } from '../../components/backgrounds/GradientBackdrop';
import { GradientType } from '../../components/shapes/Gradients';
import { Text } from '@react-pdf/renderer';

const StoryComponent = ({ ...props }: ThemedLinkProps) => {
  return (
    <PDFStory>
      <GradientBackdrop size="A4" gradient={['white', '#BBB']} gradientType={GradientType.bottomLeftToTopRight} />
      <Box direction="x" gap={3}>
        <UnorderedList>
          <ListItem style={{ marginBottom: 20 }}>
            <Text>
              <ThemedLink {...props}>Default link text</ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="blue" {...props}>
                Swatch "blue"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="indigo" {...props}>
                Swatch "indigo"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="purple" {...props}>
                Swatch "purple"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="pink" {...props}>
                Swatch "pink"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="red" {...props}>
                Swatch "red"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="orange" {...props}>
                Swatch "orange"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="yellow" {...props}>
                Swatch "yellow"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="green" {...props}>
                Swatch "green"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="teal" {...props}>
                Swatch "teal"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="cyan" {...props}>
                Swatch "cyan"
              </ThemedLink>
            </Text>
          </ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem>
            <Text>
              <ThemedLink swatch="white" {...props}>
                Swatch "white"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="gray100" {...props}>
                Swatch "gray100"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="gray200" {...props}>
                Swatch "gray200"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="gray300" {...props}>
                Swatch "gray300"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="gray400" {...props}>
                Swatch "gray400"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="gray500" {...props}>
                Swatch "gray500"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="gray600" {...props}>
                Swatch "gray600"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="gray700" {...props}>
                Swatch "gray700"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="gray800" {...props}>
                Swatch "gray800"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="gray900" {...props}>
                Swatch "gray900"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="black" {...props}>
                Swatch "black"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="primary" {...props}>
                Swatch "primary"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="secondary" {...props}>
                Swatch "secondary"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="success" {...props}>
                Swatch "success"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="info" {...props}>
                Swatch "info"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="warning" {...props}>
                Swatch "warning"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="danger" {...props}>
                Swatch "danger"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="light" {...props}>
                Swatch "light"
              </ThemedLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <ThemedLink swatch="dark" {...props}>
                Swatch "dark"
              </ThemedLink>
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Link', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Main: Story = {
  args: {
    href: 'https://github.com/justinmahar/react-pdf-builder',
  },
};
