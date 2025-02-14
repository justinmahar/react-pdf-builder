import { Document, Font, PageProps, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { ThemedPage, ThemedPageProps } from '../../components/basics/ThemedPage';
import { Themes } from '../../themes/Themes';
import { Fonts } from '../../fonts/Fonts';
import { Theme } from '../../themes/Theme';

export interface PDFStoryProps {
  children?: any;
  pageSize?: string;
  orientation?: 'portrait' | 'landscape';
  scale?: number;
  pageProps?: ThemedPageProps;
  theme?: Theme;
  width?: number;
  height?: number;
}

export const PDFStory = ({
  children,
  pageSize = 'LETTER',
  orientation,
  scale = 1,
  pageProps,
  theme,
  width = 500,
  height = 700,
  ...props
}: PDFStoryProps) => {
  theme = theme ?? Themes.default.build({ scale });
  const roboto = Fonts.load(Fonts.sansSerif.roboto);
  Font.register(roboto as any);
  return (
    <PDFViewer style={{ height, width }}>
      <Document>
        <ThemedPage
          theme={theme}
          size={pageSize as any}
          orientation={orientation}
          {...pageProps}
          style={{ fontFamily: roboto.family, ...pageProps?.style }}
        >
          {children}
        </ThemedPage>
      </Document>
    </PDFViewer>
  );
};
