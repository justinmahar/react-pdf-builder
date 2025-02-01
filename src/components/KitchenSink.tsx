import { Document, Image, Link, Page, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { DivProps } from 'react-html-props';
import { Card } from './builder/parts/card/Card';
import { CardBody } from './builder/parts/card/CardBody';
import { CardHeader } from './builder/parts/card/CardHeader';
import { Box } from './builder/parts/layout/Box';
import { ListItem } from './builder/parts/lists/ListItem';
import { OrderedList } from './builder/parts/lists/OrderedList';
import { UnorderedList } from './builder/parts/lists/UnorderedList';
import { PageNumber } from './builder/parts/pages/PageNumber';
import { RectangleShape } from './builder/parts/shapes/RectangleShape';
import { Table } from './builder/parts/table/Table';
import { TableCell } from './builder/parts/table/TableCell';
import { TableRow } from './builder/parts/table/TableRow';
import { Heading1 } from './builder/parts/typography/Heading1';
import { Heading2 } from './builder/parts/typography/Heading2';
import { Heading3 } from './builder/parts/typography/Heading3';
import { Heading4 } from './builder/parts/typography/Heading4';
import { Heading5 } from './builder/parts/typography/Heading5';
import { Heading6 } from './builder/parts/typography/Heading6';
import { Paragraph } from './builder/parts/typography/Paragraph';
import { Button } from './builder/parts/widgets/Button';

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
  const buttonHref = 'https://github.com/justinmahar/react-pdf-builder';
  const footerHeight = 50;
  return (
    <div
      {...props}
      style={{
        ...props.style,
      }}
    >
      <PDFViewer style={{ height: 600, width: 400 }}>
        <Document>
          <Page
            size="A4"
            style={{ flexDirection: 'column', padding: 30, paddingBottom: footerHeight, backgroundColor: '#F8F9FA' }}
          >
            <Box>
              <RectangleShape width={100} height={50} gradient={['blue', 'green']} />
            </Box>
            {/* <Box style={{ position: 'absolute' }}>
              <Svg viewBox="0 0 20 20" width={1000}>
                <Defs>
                  <RadialGradient id="myRadialGradient">
                    <Stop offset="10%" stopColor="gold" />
                    <Stop offset="95%" stopColor="red" />
                  </RadialGradient>
                </Defs>
                <Circle cx="10" cy="10" r="10" fill="url('#myRadialGradient')" />
              </Svg>
            </Box> */}
            <Box direction="y" style={{ gap: 10 }}>
              <Heading5 rule>Basic Typography</Heading5>
              <Heading1 rule>Heading1</Heading1>
              <Heading2 rule>Heading2</Heading2>
              <Heading3 rule>Heading3</Heading3>
              <Heading4 rule>Heading4</Heading4>
              <Heading5 rule>Heading5</Heading5>
              <Heading6 rule>Heading6</Heading6>
              <Paragraph>
                Paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
              </Paragraph>
              <Heading5 rule break>
                Unordered Lists
              </Heading5>
              <UnorderedList>
                <ListItem>React</ListItem>
                <ListItem>PDF</ListItem>
                <ListItem>Builder</ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </ListItem>
              </UnorderedList>
              <Heading5 rule>Ordered Lists</Heading5>
              <OrderedList>
                <ListItem>List Item A</ListItem>
                <ListItem>List Item B</ListItem>
                <ListItem>List Item C</ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </ListItem>
              </OrderedList>
              <Heading5 rule>Layout</Heading5>
              <Heading6>Horizontal Box</Heading6>
              <Box direction="x">
                <Box
                  grow
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}
                >
                  <Paragraph style={{ marginBottom: 0 }}>Grow</Paragraph>
                </Box>
                <Box
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}
                >
                  <Paragraph style={{ marginBottom: 0 }}>Shrink</Paragraph>
                </Box>
                <Box
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
                  <Paragraph>Width 275. Specify a width to allow text wrapping.</Paragraph>
                  <Paragraph style={{ marginBottom: 0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Paragraph>
                </Box>
              </Box>
              <Box direction="x" gap={10}>
                <Box
                  grow
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}
                >
                  <Paragraph style={{ marginBottom: 0 }}>Grow</Paragraph>
                </Box>
                <Box
                  shrink
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}
                >
                  <Paragraph style={{ marginBottom: 0 }}>Shrink</Paragraph>
                </Box>
                <Box
                  padding={10}
                  style={{
                    width: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'lightyellow',
                  }}
                >
                  <Paragraph style={{ marginBottom: 0 }}>200px</Paragraph>
                </Box>
              </Box>
              <Heading6 break>Vertical Box</Heading6>
              <Box direction="y" style={{ height: 500 }}>
                <Box
                  grow
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}
                >
                  <Paragraph style={{ marginBottom: 0 }}>Grow</Paragraph>
                </Box>
                <Box
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}
                >
                  <Paragraph style={{ marginBottom: 0 }}>Shrink</Paragraph>
                </Box>
                <Box
                  direction="y"
                  padding={10}
                  style={{
                    justifyContent: 'center',
                    backgroundColor: 'lightyellow',
                    textAlign: 'justify',
                  }}
                >
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Paragraph>
                  <Paragraph style={{ marginBottom: 0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Paragraph>
                </Box>
              </Box>
              <Heading5 rule break>
                Tables
              </Heading5>
              <Heading6>Plain and bordered inside, 400px</Heading6>
              <Box direction="x" style={{ justifyContent: 'center' }}>
                <Table borderedInside style={{ width: 400 }}>
                  <TableRow>
                    <TableCell style={{ textAlign: 'right' }}>Lorem ipsum dolor</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>Consectetur adipiscing elit</TableCell>
                    <TableCell>Sed do eiusmod</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ textAlign: 'right' }}>Incididunt ut labore</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Dolore magna aliqua</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ textAlign: 'right' }}>Lorem ipsum dolor</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>Consectetur adipiscing elit</TableCell>
                    <TableCell>Sed do eiusmod</TableCell>
                  </TableRow>
                </Table>
              </Box>
              <Heading6>Striped, horizontal bordered, with page wrapping demo</Heading6>
              <Table borderedOutside borderedHorizontal borderWidth={1} striped>
                <TableRow>
                  <TableCell>Lorem ipsum dolor</TableCell>
                  <TableCell>Consectetur adipiscing elit</TableCell>
                  <TableCell>Sed do eiusmod</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Incididunt ut labore</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et magna aliqua.
                  </TableCell>
                  <TableCell>Dolore magna aliqua</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lorem ipsum dolor</TableCell>
                  <TableCell>Consectetur adipiscing elit</TableCell>
                  <TableCell>Sed do eiusmod</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Incididunt ut labore</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et magna aliqua.
                  </TableCell>
                  <TableCell>Dolore magna aliqua</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lorem ipsum dolor</TableCell>
                  <TableCell>Consectetur adipiscing elit</TableCell>
                  <TableCell>Sed do eiusmod</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Incididunt ut labore</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et magna aliqua.
                  </TableCell>
                  <TableCell>Dolore magna aliqua</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lorem ipsum dolor</TableCell>
                  <TableCell>Consectetur adipiscing elit</TableCell>
                  <TableCell>Sed do eiusmod</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lorem ipsum dolor</TableCell>
                  <TableCell>Consectetur adipiscing elit</TableCell>
                  <TableCell>Sed do eiusmod</TableCell>
                </TableRow>
              </Table>
              <Heading6>Styled with column widths 30%, 50%, 20%</Heading6>
              <Table
                bordered
                inverseStriped
                borderColor="#005BDF"
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                stripeStyle={{ backgroundColor: '#007BFF22' }}
                colWidths={['30%', '50%', '20%']}
              >
                <TableRow
                  style={{
                    backgroundColor: '#007BFF',
                    color: 'white',
                  }}
                >
                  <TableCell>
                    <Heading6 style={{ marginBottom: 0 }}>Lorem ipsum dolor</Heading6>
                  </TableCell>
                  <TableCell>
                    <Heading6 style={{ marginBottom: 0 }}>Consectetur adipiscing elit</Heading6>
                  </TableCell>
                  <TableCell>
                    <Heading6 style={{ marginBottom: 0 }}>Sed do eiusmod</Heading6>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lorem ipsum dolor</TableCell>
                  <TableCell>Consectetur adipiscing elit</TableCell>
                  <TableCell>Sed do eiusmod</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Incididunt ut labore</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et magna aliqua.
                  </TableCell>
                  <TableCell>Dolore magna aliqua</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lorem ipsum dolor</TableCell>
                  <TableCell>Consectetur adipiscing elit</TableCell>
                  <TableCell>Sed do eiusmod</TableCell>
                </TableRow>
              </Table>
              <Heading5 rule break>
                Cards &amp; Buttons
              </Heading5>
              <Card>
                <CardHeader>
                  <Heading5 style={{ marginBottom: 0 }}>Card Title</Heading5>
                </CardHeader>
                <CardBody withHeader>
                  <Box direction="x" style={{ flexWrap: 'wrap', justifyContent: 'center', gap: '10' }}>
                    <Button variant="primary" href={buttonHref}>
                      Primary
                    </Button>
                    <Button variant="secondary" href={buttonHref}>
                      Secondary
                    </Button>
                    <Button variant="success" href={buttonHref}>
                      Success
                    </Button>
                    <Button variant="danger" href={buttonHref}>
                      Danger
                    </Button>
                    <Button variant="warning" href={buttonHref}>
                      Warning
                    </Button>
                    <Button variant="info" href={buttonHref}>
                      Info
                    </Button>
                    <Button variant="light" href={buttonHref}>
                      Light
                    </Button>
                    <Button variant="dark" href={buttonHref}>
                      Dark
                    </Button>
                    <Button variant="link" href={buttonHref}>
                      Link
                    </Button>
                  </Box>
                </CardBody>
              </Card>
            </Box>
            <Box
              direction="x"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                marginHorizontal: 'auto',
                justifyContent: 'space-between',
                gap: 10,
                alignItems: 'center',
                height: footerHeight,
                backgroundColor: '#00000011',
                paddingLeft: 30,
                paddingRight: 30,
              }}
              fixed
            >
              <Link
                href="https://github.com/justinmahar/react-pdf-builder"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Box direction="x" gap={10} style={{ alignItems: 'center' }}>
                  <Image src="/images/github-250.png" style={{ height: 24, padding: 2 }}></Image>
                  React PDF Builder
                </Box>
              </Link>
              <PageNumber format="Page %n of %t" />
            </Box>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
