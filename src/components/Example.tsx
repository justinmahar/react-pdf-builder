import { Document, Page, PDFViewer, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { DivProps } from 'react-html-props';

export interface ExampleProps extends DivProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Label shown in the component
   */
  label: string;
}

/**
 * This is the description for the Example component
 */
export const Example = ({ label, ...props }: ExampleProps) => {
  return (
    <div
      {...props}
      style={{
        ...props.style,
      }}
    >
      <PDFViewer style={{ height: 600, width: 400 }}>
        <Document>
          <Page size="A4" style={{ flexDirection: 'column', padding: 30 }}>
            <View>
              <Text>Test2</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
