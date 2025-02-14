import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemedLink, ThemedLinkProps } from '../../components/basics/ThemedLink';
import { ThemedText } from '../../components/basics/ThemedText';
import { Card } from '../../components/card/Card';
import { CardBody } from '../../components/card/CardBody';
import { Box } from '../../components/layout/Box';
import { ListItem } from '../../components/lists/ListItem';
import { UnorderedList } from '../../components/lists/UnorderedList';
import { PDFStory } from '../parts/PDFStory';

const StoryComponent = ({ ...props }: ThemedLinkProps) => {
  return (
    <PDFStory>
      <Card swatch="gray600">
        <CardBody>
          <Box className="gap-3">
            <UnorderedList className="mb-0">
              <ListItem className="mb-3">
                <ThemedText>
                  <ThemedLink {...props}>Default link text</ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>Color palette:</ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="blue" {...props}>
                    Swatch "blue"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="indigo" {...props}>
                    Swatch "indigo"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="purple" {...props}>
                    Swatch "purple"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="pink" {...props}>
                    Swatch "pink"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="red" {...props}>
                    Swatch "red"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="orange" {...props}>
                    Swatch "orange"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="yellow" {...props}>
                    Swatch "yellow"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="green" {...props}>
                    Swatch "green"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="teal" {...props}>
                    Swatch "teal"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="cyan" {...props}>
                    Swatch "cyan"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
            </UnorderedList>
            <UnorderedList className="mb-0">
              <ListItem>Greyscale:</ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="white" {...props}>
                    Swatch "white"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="gray100" {...props}>
                    Swatch "gray100"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="gray200" {...props}>
                    Swatch "gray200"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="gray300" {...props}>
                    Swatch "gray300"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="gray400" {...props}>
                    Swatch "gray400"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="gray500" {...props}>
                    Swatch "gray500"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="gray600" {...props}>
                    Swatch "gray600"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="gray700" {...props}>
                    Swatch "gray700"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="gray800" {...props}>
                    Swatch "gray800"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="gray900" {...props}>
                    Swatch "gray900"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem className="mb-3">
                <ThemedText>
                  <ThemedLink swatch="black" {...props}>
                    Swatch "black"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>Theme colors:</ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="primary" {...props}>
                    Swatch "primary"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="secondary" {...props}>
                    Swatch "secondary"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="success" {...props}>
                    Swatch "success"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="info" {...props}>
                    Swatch "info"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="warning" {...props}>
                    Swatch "warning"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="danger" {...props}>
                    Swatch "danger"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="light" {...props}>
                    Swatch "light"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
              <ListItem>
                <ThemedText>
                  <ThemedLink swatch="dark" {...props}>
                    Swatch "dark"
                  </ThemedLink>
                </ThemedText>
              </ListItem>
            </UnorderedList>
          </Box>
        </CardBody>
      </Card>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Basics/ThemedLink', // <-- Set to your story title
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
