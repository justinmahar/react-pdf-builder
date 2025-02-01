import { Document, Page, PageProps, PDFViewer } from '@react-pdf/renderer';
import React from 'react';

export interface PDFStoryProps {
  children?: any;
  pageProps?: PageProps;
}

export const PDFStory = ({ children, pageProps, ...props }: PDFStoryProps) => {
  return (
    <PDFViewer style={{ height: 600, width: 400 }}>
      <Document>
        <Page size="A4" {...pageProps} style={{ flexDirection: 'column', padding: 30, ...pageProps?.style }}>
          {children}
        </Page>
      </Document>
    </PDFViewer>
  );
};
