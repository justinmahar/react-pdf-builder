import { Document, Font, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { Fonts } from '../../fonts/Fonts';
import { Themes } from '../../themes/Themes';
import { ThemedPage } from '../basics/ThemedPage';
import { Button } from '../button/Button';
import { Card } from '../card/Card';
import { CardBody } from '../card/CardBody';
import { CardHeader } from '../card/CardHeader';
import { Box } from '../layout/Box';
import { Table } from '../table/Table';
import { TableCell } from '../table/TableCell';
import { TableRow } from '../table/TableRow';
import { Heading3 } from '../typography/Heading3';
import { Paragraph } from '../typography/Paragraph';
import { Div } from '../basics/ThemedView';

export const QuickStart = () => {
  const roboto = Fonts.load(Fonts.sansSerif.roboto);
  Font.register(roboto);
  Font.registerEmojiSource(Fonts.emojis.joyPixels());
  const theme = Themes.default.build({
    scale: 1,
    override: {
      classNames: { 'my-custom-class': { color: 'white', backgroundColor: 'darkblue', padding: 10 } },
    },
  });
  return (
    <PDFViewer style={{ height: 700, width: 500 }}>
      <Document>
        <ThemedPage theme={theme} size="A4" style={{ fontFamily: roboto.family }}>
          <Heading3 rule>Hello, world!</Heading3>
          <Paragraph>Let's get started building the PDF.</Paragraph>
          <Box dir="y" className="gap-3">
            <Box className="gap-3">
              <Card swatch="gray300" className="mb-0 w-100">
                <CardHeader>Example</CardHeader>
                <CardBody className="d-flex flex-column gap-2">
                  This is a card with some text inside as an example 👍
                </CardBody>
              </Card>
            </Box>
            <Table bordered inverseStriped swatch="primary" className="rounded mb-0">
              <TableRow swatch="primary" className="fw-bold">
                <TableCell>Header 1</TableCell>
                <TableCell>Header 2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cell A</TableCell>
                <TableCell>Cell Y</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cell B</TableCell>
                <TableCell>Cell Z</TableCell>
              </TableRow>
            </Table>
            <Box className="justify-content-end">
              <Button href="#">Button</Button>
            </Box>
            <Div className="my-custom-class">This has a custom class applied.</Div>
          </Box>
        </ThemedPage>
      </Document>
    </PDFViewer>
  );
};
