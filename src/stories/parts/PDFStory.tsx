import { Document, Font, PageProps, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { ThemedPage, ThemedPageProps } from '../../components/basics/ThemedPage';
import { Themes } from '../../themes/Themes';
import { Fonts } from '../../fonts/Fonts';
import { Theme } from '../../themes/Theme';
import { PDFThemeProvider } from '../../components/theme/PDFThemeProvider';
import { ThemeBuilder } from '../../themes/ThemeBuilder';

export interface PDFStoryProps {
  children?: any;
  pageSize?: string;
  orientation?: 'portrait' | 'landscape';
  scale?: number;
  pageProps?: ThemedPageProps;
  themeBuilder?: ThemeBuilder;
  width?: number;
  height?: number;
}

export const PDFStory = ({
  children,
  pageSize = 'LETTER',
  orientation,
  scale = 1,
  pageProps,
  themeBuilder,
  width = 500,
  height = 700,
}: PDFStoryProps) => {
  const theme = (themeBuilder ?? Themes.default).build({ scale });
  const roboto = Fonts.load(Fonts.sansSerif.roboto);
  Font.register(roboto as any);
  return (
    <PDFThemeProvider theme={theme}>
      <PDFViewer style={{ height, width }}>
        <Document>
          <ThemedPage
            size={pageSize as any}
            orientation={orientation}
            {...pageProps}
            style={{ fontFamily: roboto.family, ...pageProps?.style }}
          >
            {children}
          </ThemedPage>
        </Document>
      </PDFViewer>
    </PDFThemeProvider>
  );
};
