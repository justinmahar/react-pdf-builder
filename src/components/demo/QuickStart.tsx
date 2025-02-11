import { Document, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { ReactPDFBuilder } from '../builder/ReactPDFBuilder';

export const QuickStart = () => {
  const RPB = new ReactPDFBuilder();
  return (
    <PDFViewer style={{ height: 700, width: 500 }}>
      <Document>
        <RPB.Page size="A4">
          <RPB.Heading3 rule>Hello, world!</RPB.Heading3>
          <RPB.Paragraph>Let's get started building the PDF.</RPB.Paragraph>
          <RPB.Box direction="y" gap={15}>
            <RPB.Box direction="x">
              <RPB.Button href="#">Button</RPB.Button>
            </RPB.Box>
            <RPB.Box direction="x" gap={15}>
              <RPB.Card swatch="gray300" style={{ marginBottom: 0, width: '50%' }}>
                <RPB.CardHeader>Example</RPB.CardHeader>
                <RPB.CardBody>This is a card with some text inside as an example</RPB.CardBody>
              </RPB.Card>
              <RPB.Table bordered inverseStriped swatch="cyan" style={{ borderRadius: 10, width: '50%' }}>
                <RPB.TableRow swatch="cyan">
                  <RPB.TableCell>Header 1</RPB.TableCell>
                  <RPB.TableCell>Header 2</RPB.TableCell>
                </RPB.TableRow>
                <RPB.TableRow>
                  <RPB.TableCell>Cell A</RPB.TableCell>
                  <RPB.TableCell>Cell Y</RPB.TableCell>
                </RPB.TableRow>
                <RPB.TableRow>
                  <RPB.TableCell>Cell B</RPB.TableCell>
                  <RPB.TableCell>Cell Z</RPB.TableCell>
                </RPB.TableRow>
              </RPB.Table>
            </RPB.Box>
          </RPB.Box>
        </RPB.Page>
      </Document>
    </PDFViewer>
  );
};
