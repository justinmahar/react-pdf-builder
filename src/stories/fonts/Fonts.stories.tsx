import { Font, Link, Text } from '@react-pdf/renderer';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fontDefinitions, Fonts } from '../../fonts/Fonts';
import { Box } from '../../components/layout/Box';
import { Heading1 } from '../../components/typography/Heading1';
import { Heading2 } from '../../components/typography/Heading2';
import { Heading3 } from '../../components/typography/Heading3';
import { Heading4 } from '../../components/typography/Heading4';
import { Heading5 } from '../../components/typography/Heading5';
import { Heading6 } from '../../components/typography/Heading6';
import { Paragraph } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';
import { ThemedText } from '../../components/basics/ThemedText';
import { ThemedLink } from '../../components/basics/ThemedLink';

const StoryComponent = ({ fontFamily }: { fontFamily: string }) => {
  console.log('Loading', fontDefinitions.length, 'fonts...');
  fontDefinitions.forEach((f) => {
    // Register fonts
    const loadedFont = Fonts.load(f.family);
    if (loadedFont) {
      console.log(`Loaded font: "${loadedFont.family}"`);
      Font.register(loadedFont);
    }
  });
  const fontDefinition = fontDefinitions.find((f) => f.family === fontFamily);

  return (
    <PDFStory pageProps={{ style: { fontFamily } }}>
      <Box direction="y" style={{ gap: 10 }}>
        <Heading5 rule style={{ marginBottom: 0 }}>
          Font Family {fontFamily ? `"${fontFamily}"` : 'Not Specified'}
        </Heading5>
        <Heading6>{fontDefinition ? `${fontDefinition?.type} font` : ''}</Heading6>
        <Heading1 rule>Heading 1</Heading1>
        <Heading2 rule>Heading 2</Heading2>
        <Heading3 rule>Heading 3</Heading3>
        <Heading4 rule>Heading 4</Heading4>
        <Heading5 rule>Heading 5</Heading5>
        <Heading6 rule>Heading 6</Heading6>
        <Paragraph>
          Paragraph text. <ThemedLink href="#">This is a link.</ThemedLink>{' '}
          <ThemedText className="fw-bold">This is bold.</ThemedText>{' '}
          <ThemedText className="fst-italic">This is italic.</ThemedText> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </Box>
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Fonts/Families', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const NoFontFamilySpecified: Story = {
  args: {},
};

export const MonoCourierPrime: Story = {
  args: {
    fontFamily: 'Courier Prime',
  },
};

export const MonoDMMono: Story = {
  args: {
    fontFamily: 'DM Mono',
  },
};

export const MonoJetBrainsMono: Story = {
  args: {
    fontFamily: 'JetBrains Mono',
  },
};

export const MonoRobotoMono: Story = {
  args: {
    fontFamily: 'Roboto Mono',
  },
};

export const MonoSourceCodePro: Story = {
  args: {
    fontFamily: 'Source Code Pro',
  },
};

export const MonoSpaceMono: Story = {
  args: {
    fontFamily: 'Space Mono',
  },
};

export const MonoUbuntuMono: Story = {
  args: {
    fontFamily: 'Ubuntu Mono',
  },
};

export const SansSerifInter: Story = {
  args: {
    fontFamily: 'Inter',
  },
};

export const SansSerifLato: Story = {
  args: {
    fontFamily: 'Lato',
  },
};

export const SansSerifMontserrat: Story = {
  args: {
    fontFamily: 'Montserrat',
  },
};

export const SansSerifNotoSans: Story = {
  args: {
    fontFamily: 'Noto Sans',
  },
};

export const SansSerifOpenSans: Story = {
  args: {
    fontFamily: 'Open Sans',
  },
};

export const SansSerifPoppins: Story = {
  args: {
    fontFamily: 'Poppins',
  },
};

export const SansSerifRaleway: Story = {
  args: {
    fontFamily: 'Raleway',
  },
};

export const SansSerifRobotoCondensed: Story = {
  args: {
    fontFamily: 'Roboto Condensed',
  },
};

export const SansSerifRoboto: Story = {
  args: {
    fontFamily: 'Roboto',
  },
};

export const SerifBitter: Story = {
  args: {
    fontFamily: 'Bitter',
  },
};

export const SerifCrimsonText: Story = {
  args: {
    fontFamily: 'Crimson Text',
  },
};

export const SerifEBGaramond: Story = {
  args: {
    fontFamily: 'EB Garamond',
  },
};

export const SerifLibreBaskerville: Story = {
  args: {
    fontFamily: 'Libre Baskerville',
  },
};

export const SerifLora: Story = {
  args: {
    fontFamily: 'Lora',
  },
};

export const SerifMerriweather: Story = {
  args: {
    fontFamily: 'Merriweather',
  },
};

export const SerifNotoSerif: Story = {
  args: {
    fontFamily: 'Noto Serif',
  },
};

export const SerifPlayfairDisplay: Story = {
  args: {
    fontFamily: 'Playfair Display',
  },
};

export const SerifPTSerif: Story = {
  args: {
    fontFamily: 'PT Serif',
  },
};
