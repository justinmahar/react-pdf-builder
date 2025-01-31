import { Document, Page, PDFViewer, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { DivProps } from 'react-html-props';
import { ReactPDFBuilder } from './builder/ReactPDFBuilder';

export interface KitchenSinkProps extends DivProps {
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
 * This is the description for the KitchenSink component
 */
export const KitchenSink = ({ label, ...props }: KitchenSinkProps) => {
  const RPB = new ReactPDFBuilder();

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
            <RPB.Box direction="y" style={{ gap: 10 }}>
              <RPB.Heading1>Heading1</RPB.Heading1>
              <RPB.Heading2>Heading2</RPB.Heading2>
              <RPB.Heading3>Heading3</RPB.Heading3>
              <RPB.Heading4>Heading4</RPB.Heading4>
              <RPB.Heading5>Heading5</RPB.Heading5>
              <RPB.Heading6>Heading6</RPB.Heading6>
              <RPB.Paragraph>
                Paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
              </RPB.Paragraph>
              <RPB.Heading5>Buttons</RPB.Heading5>
              <RPB.Box style={{ marginBottom: 10, flexWrap: 'wrap', gap: '10' }}>
                <RPB.Button variant="primary">Primary</RPB.Button>
                <RPB.Button variant="secondary">Secondary</RPB.Button>
                <RPB.Button variant="success">Success</RPB.Button>
                <RPB.Button variant="danger">Danger</RPB.Button>
                <RPB.Button variant="warning">Warning</RPB.Button>
                <RPB.Button variant="info">Info</RPB.Button>
                <RPB.Button variant="light">Light</RPB.Button>
                <RPB.Button variant="dark">Dark</RPB.Button>
              </RPB.Box>
              <RPB.Heading5>Unordered Lists</RPB.Heading5>
              <RPB.UnorderedList>
                <RPB.ListItem>List Item A</RPB.ListItem>
                <RPB.ListItem>List Item B</RPB.ListItem>
                <RPB.ListItem>List Item C</RPB.ListItem>
              </RPB.UnorderedList>
              <RPB.Heading5>Ordered Lists</RPB.Heading5>
              <RPB.OrderedList>
                <RPB.ListItem>List Item X</RPB.ListItem>
                <RPB.ListItem>List Item X</RPB.ListItem>
                <RPB.ListItem>List Item X</RPB.ListItem>
              </RPB.OrderedList>
            </RPB.Box>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
