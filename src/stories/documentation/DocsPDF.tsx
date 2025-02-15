import { Document, Font, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { ThemedPage, ThemedPageProps } from '../../components/basics/ThemedPage';
import { usePDFThemeContext } from '../../components/theme/PDFThemeProvider';
import { Fonts } from '../../fonts/Fonts';

export interface DocsPDFProps {
  children?: any;
  pageSize?: string;
  orientation?: 'portrait' | 'landscape';
  pageProps?: ThemedPageProps;
  width?: number;
  height?: number;
}

export const DocsPDF = ({
  children,
  pageSize = 'LETTER',
  orientation,
  pageProps,
  width = 420,
  height = 600,
}: DocsPDFProps) => {
  const roboto = Fonts.load(Fonts.sansSerif.roboto);
  Font.register(roboto);
  return (
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
  );
};
