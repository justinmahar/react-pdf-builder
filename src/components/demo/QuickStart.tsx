import { Document, Font, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { Fonts } from '../../fonts/Fonts';
import { Themes } from '../../themes/Themes';
import { ThemedPage } from '../basics/ThemedPage';
import { Div } from '../basics/ThemedView';
import { Button } from '../button/Button';
import { Box } from '../layout/Box';
import { PDFThemeProvider } from '../theme/PDFThemeProvider';
import { Heading3 } from '../typography/Heading3';
import { Paragraph } from '../typography/Paragraph';

export const QuickStart = () => {
  const roboto = Fonts.load(Fonts.sansSerif.roboto);
  Font.register(roboto);
  Font.registerEmojiSource(Fonts.emojis.joyPixels());
  const theme = Themes.default.build({
    scale: 1,
    override: {
      classNames: { 'my-custom-class': { color: 'white', backgroundColor: 'darkblue', padding: 10 } },
    },
  });
  return (
    <PDFViewer style={{ height: 700, width: 500 }}>
      <Document>
        <PDFThemeProvider theme={theme}>
          <ThemedPage size="A4" style={{ fontFamily: roboto.family }}>
            <Box dir="y" className="gap-3">
              <Heading3 rule>Hello, world!</Heading3>
              <Paragraph className="mb-0">Let's get started building the PDF.</Paragraph>
              <Box>
                <Button href="#">Button</Button>
              </Box>
              <Div className="my-custom-class w-50">50% Div with a custom class. 👍</Div>
            </Box>
          </ThemedPage>
        </PDFThemeProvider>
      </Document>
    </PDFViewer>
  );
};
