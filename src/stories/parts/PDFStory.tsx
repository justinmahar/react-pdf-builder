import { Document, Page, PageProps, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { ThemedPage } from '../../components/pages/ThemedPage';

export interface PDFStoryProps {
  children?: any;
  pageProps?: PageProps;
}

export const PDFStory = ({ children, pageProps, ...props }: PDFStoryProps) => {
  return (
    <PDFViewer style={{ height: 600, width: 400 }}>
      <Document>
        <ThemedPage size="A4" {...pageProps} style={{ ...pageProps?.style }}>
          {children}
        </ThemedPage>
      </Document>
    </PDFViewer>
  );
};
