import { Document, Image, Page, PDFViewer, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { DivProps } from 'react-html-props';
import { ReactPDFBuilder } from './builder/ReactPDFBuilder';
import { Card } from './builder/parts/card/Card';
import { CardHeader } from './builder/parts/card/CardHeader';
import { Heading5 } from './builder/parts/typography/Heading5';
import { CardBody } from './builder/parts/card/CardBody';
import { Box } from './builder/parts/layout/Box';
import { Table } from './builder/parts/table/Table';
import { TableRow } from './builder/parts/table/TableRow';
import { TableCell } from './builder/parts/table/TableCell';

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

  const buttonHref = 'https://github.com/justinmahar/react-pdf-builder';

  return (
    <div
      {...props}
      style={{
        ...props.style,
      }}
    >
      <PDFViewer style={{ height: 600, width: 400 }}>
        <Document>
          <Page size="A4" style={{ flexDirection: 'column', padding: 30, backgroundColor: '#F8F9FA' }}>
            <Table
              direction="y"
              bordered
              style={{
                marginVertical: 50,
              }}
            >
              <TableRow>
                <TableCell style={{ width: '30%', padding: 8 }}>Lorem ipsum dolor</TableCell>
                <TableCell style={{ width: '50%', padding: 8 }}>Consectetur adipiscing elit</TableCell>
                <TableCell style={{ width: '20%', padding: 8 }}>Sed do eiusmod</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: '30%', padding: 8 }}>Incididunt ut labore</TableCell>
                <TableCell style={{ width: '50%', padding: 8 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  magna aliqua.
                </TableCell>
                <TableCell style={{ width: '20%', padding: 8 }}>Dolore magna aliqua</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: '30%', padding: 8 }}>Lorem ipsum dolor</TableCell>
                <TableCell style={{ width: '50%', padding: 8 }}>Consectetur adipiscing elit</TableCell>
                <TableCell style={{ width: '20%', padding: 8 }}>Sed do eiusmod</TableCell>
              </TableRow>
            </Table>

            {/* <Text
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '30%',
                marginHorizontal: 'auto',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              WOW AWESOME
            </Text> */}
            <RPB.Box direction="y" style={{ gap: 10 }}>
              <RPB.Heading5 rule>Basic Typography</RPB.Heading5>
              <RPB.Heading1 rule>Heading1</RPB.Heading1>
              <RPB.Heading2 rule>Heading2</RPB.Heading2>
              <RPB.Heading3 rule>Heading3</RPB.Heading3>
              <RPB.Heading4 rule>Heading4</RPB.Heading4>
              <RPB.Heading5 rule>Heading5</RPB.Heading5>
              <RPB.Heading6 rule>Heading6</RPB.Heading6>
              <RPB.Paragraph>
                Paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
              </RPB.Paragraph>
              <Card>
                <CardHeader>
                  <Heading5 style={{ marginBottom: 0 }}>Buttons</Heading5>
                </CardHeader>
                <CardBody withHeader>
                  <RPB.Box direction="x" style={{ flexWrap: 'wrap', justifyContent: 'center', gap: '10' }}>
                    <RPB.Button variant="primary" href={buttonHref}>
                      Primary
                    </RPB.Button>
                    <RPB.Button variant="secondary" href={buttonHref}>
                      Secondary
                    </RPB.Button>
                    <RPB.Button variant="success" href={buttonHref}>
                      Success
                    </RPB.Button>
                    <RPB.Button variant="danger" href={buttonHref}>
                      Danger
                    </RPB.Button>
                    <RPB.Button variant="warning" href={buttonHref}>
                      Warning
                    </RPB.Button>
                    <RPB.Button variant="info" href={buttonHref}>
                      Info
                    </RPB.Button>
                    <RPB.Button variant="light" href={buttonHref}>
                      Light
                    </RPB.Button>
                    <RPB.Button variant="dark" href={buttonHref}>
                      Dark
                    </RPB.Button>
                    <RPB.Button variant="link" href={buttonHref}>
                      Link
                    </RPB.Button>
                  </RPB.Box>
                </CardBody>
              </Card>
              <RPB.Heading5 rule break>
                Unordered Lists
              </RPB.Heading5>
              <RPB.UnorderedList>
                <RPB.ListItem>React</RPB.ListItem>
                <RPB.ListItem>PDF</RPB.ListItem>
                <RPB.ListItem>Builder</RPB.ListItem>
                <RPB.ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </RPB.ListItem>
              </RPB.UnorderedList>
              <RPB.Heading5 rule>Ordered Lists</RPB.Heading5>
              <RPB.OrderedList>
                <RPB.ListItem>List Item A</RPB.ListItem>
                <RPB.ListItem>List Item B</RPB.ListItem>
                <RPB.ListItem>List Item C</RPB.ListItem>
                <RPB.ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </RPB.ListItem>
              </RPB.OrderedList>
              <RPB.Heading5 rule>Layout</RPB.Heading5>
              <RPB.Heading6>Horizontal Box</RPB.Heading6>
              <RPB.Box direction="x">
                <RPB.Box
                  grow
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>Grow</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>Shrink</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  direction="y"
                  padding={10}
                  style={{
                    width: 275,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'lightyellow',
                    textAlign: 'justify',
                  }}
                >
                  <RPB.Paragraph>Width 275. Specify a width to allow text wrapping.</RPB.Paragraph>
                  <RPB.Paragraph style={{ marginBottom: 0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </RPB.Paragraph>
                </RPB.Box>
              </RPB.Box>
              <RPB.Box direction="x" gap={10}>
                <RPB.Box
                  grow
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>Grow</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  shrink
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>Shrink</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  padding={10}
                  style={{ width: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightyellow' }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>200px</RPB.Paragraph>
                </RPB.Box>
              </RPB.Box>
              <RPB.Heading6 break>Vertical Box</RPB.Heading6>
              <RPB.Box direction="y" style={{ height: 730 }}>
                <RPB.Box
                  grow
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>Grow</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>Shrink</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  direction="y"
                  padding={10}
                  style={{
                    justifyContent: 'center',
                    backgroundColor: 'lightyellow',
                    textAlign: 'justify',
                  }}
                >
                  <RPB.Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </RPB.Paragraph>
                  <RPB.Paragraph style={{ marginBottom: 0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </RPB.Paragraph>
                </RPB.Box>
              </RPB.Box>
            </RPB.Box>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
