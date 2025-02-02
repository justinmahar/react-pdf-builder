import { Document, Image, Link, Page, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { DivProps } from 'react-html-props';
import { Card } from './card/Card';
import { CardBody } from './card/CardBody';
import { CardHeader } from './card/CardHeader';
import { Box } from './layout/Box';
import { ListItem } from './lists/ListItem';
import { OrderedList } from './lists/OrderedList';
import { UnorderedList } from './lists/UnorderedList';
import { PageNumber } from './pages/PageNumber';
import { CircleShape } from './shapes/CircleShape';
import { GradientType } from './shapes/Gradients';
import { RectangleShape } from './shapes/RectangleShape';
import { Table } from './table/Table';
import { TableCell } from './table/TableCell';
import { TableRow } from './table/TableRow';
import { Heading1 } from './typography/Heading1';
import { Heading2 } from './typography/Heading2';
import { Heading3 } from './typography/Heading3';
import { Heading4 } from './typography/Heading4';
import { Heading5 } from './typography/Heading5';
import { Heading6 } from './typography/Heading6';
import { Paragraph } from './typography/Paragraph';
import { Button } from './widgets/Button';
import { PlaidBackground } from './backgrounds/PlaidBackground';
import { LineShape } from './shapes/LineShape';

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
          <Page size="A4" style={{ flexDirection: 'column', color: 'white' }}>
            <PlaidBackground />
            <Box direction="y" style={{ height: '100%' }}>
              <Box style={{ height: '5%', backgroundColor: '#00000022' }} />
              <Box style={{ height: '15%' }} />
              <Box
                shrink
                style={{
                  justifyContent: 'center',
                  padding: 30,
                  backgroundColor: '#00000022',
                }}
              >
                <Heading1 style={{ textAlign: 'center', fontSize: 60 }}>React PDF Builder</Heading1>
                <Heading5 style={{ textAlign: 'center', fontSize: 28 }}>
                  Build beautiful PDF documents in React.
                </Heading5>
              </Box>
              <Box grow style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image src="/images/logo-red.png" style={{ width: 250 }} />
              </Box>
              <Box style={{ height: '5%', backgroundColor: '#00000022' }} />
            </Box>
          </Page>
          <Page
            size="A4"
            style={{ flexDirection: 'column', padding: 30, paddingBottom: footerHeight, backgroundColor: '#F8F9FA' }}
          >
            <Box
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                transform: `scale(1)`,
              }}
              fixed
            >
              <RectangleShape
                gradientType={GradientType.topLeftToBottomRight}
                gradient={[
                  { offset: '0%', stopColor: 'black', stopOpacity: 0 },
                  { offset: '10%', stopColor: 'black', stopOpacity: 0 },
                  { offset: '10%', stopColor: 'black', stopOpacity: 0 },
                  { offset: '20%', stopColor: 'black', stopOpacity: 0.1 },
                  { offset: '20%', stopColor: 'black', stopOpacity: 0 },
                  { offset: '100%', stopColor: 'black', stopOpacity: 0 },
                ]}
              />
            </Box>
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
              <Box style={{ position: 'relative', marginBottom: 10 }}>
                <Table
                  borderedOutside
                  borderedHorizontal
                  borderWidth={1}
                  striped
                  style={{ backgroundColor: 'white', marginBottom: 0 }}
                >
                  <TableRow>
                    <TableCell>Lorem ipsum dolor</TableCell>
                    <TableCell>Consectetur adipiscing elit</TableCell>
                    <TableCell>Sed do eiusmod</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Incididunt ut labore</TableCell>
                    <TableCell>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et magna aliqua.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et magna aliqua.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et magna aliqua.
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
                <RectangleShape
                  gradientType={GradientType.topToBottom}
                  gradient={[
                    { offset: '0%', stopColor: 'black', stopOpacity: 0.3 },
                    { offset: '50%', stopColor: 'black', stopOpacity: 0.1 },
                    { offset: '80%', stopColor: 'black', stopOpacity: 0.01 },
                    { offset: '100%', stopColor: 'black', stopOpacity: 0 },
                  ]}
                  width={535}
                  height={15}
                />
              </Box>
              <Heading6>Styled with column widths 30%, 50%, 20%</Heading6>
              <Table
                bordered
                inverseStriped
                borderColor="#005BDF"
                style={{ backgroundColor: 'white', borderRadius: 10, marginBottom: 0 }}
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
              <Heading5 rule>Shapes</Heading5>
              <Box direction="x" gap={20}>
                <Box>
                  <CircleShape size={75} fill="red" />
                </Box>
                <Box style={{ padding: 10 }}>
                  <CircleShape
                    size={100}
                    gradient={['white', 'darkgray']}
                    ellipseProps={{ stroke: 'green', strokeWidth: 5 }}
                    gradientType={GradientType.radial}
                  />
                </Box>
                <Box style={{ transform: 'translate(50, 50), rotate(-10deg)' }}>
                  <LineShape
                    length={200}
                    width={5}
                    gradient={['white', 'blue']}
                    gradientType={GradientType.leftToRight}
                  />
                </Box>
              </Box>
              <Box direction="x" gap={20}>
                <Box>
                  <RectangleShape width={75} height={150} fill="orange" color="red" />
                </Box>
                <Box>
                  <RectangleShape
                    width={150}
                    height={150}
                    gradient={['lightblue', 'darkblue']}
                    gradientType={GradientType.topLeftToBottomRight}
                    style={{ transform: 'translate(100, 0), rotate(45deg)' }}
                  />
                </Box>
              </Box>
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
