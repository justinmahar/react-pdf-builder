import { Document, PageProps, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { ThemedPage, ThemedPageProps } from '../../components/pages/ThemedPage';
import { Themes } from '../../themes/Themes';

export interface PDFStoryProps {
  children?: any;
  pageSize?: string;
  scale?: number;
  pageProps?: ThemedPageProps;
}

export const PDFStory = ({ children, pageSize = 'A4', scale = 1, pageProps, ...props }: PDFStoryProps) => {
  return (
    <PDFViewer style={{ height: 600, width: 400 }}>
      <Document>
        <ThemedPage
          theme={Themes.default.build({ scale })}
          size={pageSize as any}
          {...pageProps}
          style={{ ...pageProps?.style }}
        >
          {children}
        </ThemedPage>
      </Document>
    </PDFViewer>
  );
};
