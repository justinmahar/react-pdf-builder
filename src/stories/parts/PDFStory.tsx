import { Document, Font, PageProps, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { ThemedPage, ThemedPageProps } from '../../components/pages/ThemedPage';
import { Themes } from '../../themes/Themes';
import { Fonts } from '../../fonts/Fonts';

export interface PDFStoryProps {
  children?: any;
  pageSize?: string;
  scale?: number;
  pageProps?: ThemedPageProps;
}

export const PDFStory = ({ children, pageSize = 'A4', scale = 1, pageProps, ...props }: PDFStoryProps) => {
  const roboto = Fonts.load(Fonts.sansSerif.roboto);
  Font.register(roboto as any);
  return (
    <PDFViewer style={{ height: 700, width: 500 }}>
      <Document>
        <ThemedPage
          theme={Themes.default.build({ scale })}
          size={pageSize as any}
          {...pageProps}
          style={{ fontFamily: 'Roboto', ...pageProps?.style }}
        >
          {children}
        </ThemedPage>
      </Document>
    </PDFViewer>
  );
};
