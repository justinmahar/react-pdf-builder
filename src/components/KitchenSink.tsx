import { Document, Image, Link, Page, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { DivProps } from 'react-html-props';
import { PlaidBackground } from './backgrounds/PlaidBackground';
import { Card } from './card/Card';
import { CardBody } from './card/CardBody';
import { CardHeader } from './card/CardHeader';
import { Box } from './layout/Box';
import { ListItem } from './lists/ListItem';
import { OrderedList } from './lists/OrderedList';
import { UnorderedList } from './lists/UnorderedList';
import { PageNumber } from './pages/PageNumber';
import { ThemedPage } from './pages/ThemedPage';
import { CircleShape } from './shapes/CircleShape';
import { GradientType } from './shapes/Gradients';
import { LineShape } from './shapes/LineShape';
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
import { Button } from './button/Button';
import { Themes } from './theme/themes/Themes';

export interface KitchenSinkProps extends DivProps {}

/**
 * This is the description for the KitchenSink component
 */
export const KitchenSink = ({ ...props }: KitchenSinkProps) => {
  const buttonHref = 'https://github.com/justinmahar/react-pdf-builder';
  const footerHeight = '12.12%';
  const showCoverPage = false;
  const pageSize = 'LETTER';
  return (
    <div
      {...props}
      style={{
        ...props.style,
      }}
    >
      <PDFViewer style={{ height: 700, width: 500 }}>
        <Document>
          {showCoverPage && (
            <ThemedPage size={pageSize} style={{ flexDirection: 'column', color: 'white', padding: 0 }}>
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
                  <Image
                    src="https://justinmahar.github.io/react-pdf-builder/images/logo-red.png"
                    style={{ width: 250 }}
                  />
                </Box>
                <Box style={{ height: '5%', backgroundColor: '#00000022' }} />
              </Box>
            </ThemedPage>
          )}
          <ThemedPage size={pageSize} theme={Themes.dark.build()}>
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
              <Heading5 rule break>
                Layout
              </Heading5>
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
                    width: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'lightyellow',
                    textAlign: 'justify',
                  }}
                >
                  <Paragraph>Width 50%. Specify a width to allow text wrapping.</Paragraph>
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
                    width: '40%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'lightyellow',
                  }}
                >
                  <Paragraph style={{ marginBottom: 0 }}>40%</Paragraph>
                </Box>
              </Box>
              <Heading6 break>Vertical Box</Heading6>
              <Box direction="y">
                <Box
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}
                >
                  <Paragraph style={{ marginBottom: 0 }}>A</Paragraph>
                </Box>
                <Box
                  grow
                  padding={10}
                  style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen' }}
                >
                  <Paragraph style={{ marginBottom: 0 }}>B</Paragraph>
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
              <Heading6>Plain and bordered inside, 80% width</Heading6>
              <Box direction="x" style={{ justifyContent: 'center' }}>
                <Table borderedInside style={{ width: '80%' }}>
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
                <Table borderedOutside borderedHorizontal borderWidth={1} striped style={{ marginBottom: 0 }}>
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
              </Box>
              <Heading6>Styled with column widths 30%, 50%, 20%</Heading6>
              <Table
                bordered
                inverseStriped
                swatch="primary"
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                colWidths={['30%', '50%', '20%']}
              >
                <TableRow swatch="primary" inverseStriped={false}>
                  <TableCell>
                    <Heading6 style={{ marginBottom: 0 }}>Col 30% </Heading6>
                  </TableCell>
                  <TableCell>
                    <Heading6 style={{ marginBottom: 0 }}>Column 50%</Heading6>
                  </TableCell>
                  <TableCell>
                    <Heading6 style={{ marginBottom: 0 }}>20%</Heading6>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lorem ipsum dolor</TableCell>
                  <TableCell>Consectetur adipiscing elit</TableCell>
                  <TableCell>Sed do eiusmod</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell swatch="blue">Blue swatch</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et magna aliqua.
                  </TableCell>
                  <TableCell>Dolore magna aliqua</TableCell>
                </TableRow>
                <TableRow colWidths={['80%', '20%']}>
                  <TableCell>
                    This row has only two cells. The first is 80%, the second is 20%. This imitates a colspan.
                  </TableCell>
                  <TableCell swatch="teal">Teal swatch</TableCell>
                </TableRow>
                <TableRow colWidths={['50%', '50%']}>
                  <TableCell>50% col width</TableCell>
                  <TableCell>50% col width</TableCell>
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
                    <Button swatch="primary" href={buttonHref}>
                      Primary
                    </Button>
                    <Button swatch="secondary" href={buttonHref}>
                      Secondary
                    </Button>
                    <Button swatch="success" href={buttonHref}>
                      Success
                    </Button>
                    <Button swatch="danger" href={buttonHref}>
                      Danger
                    </Button>
                    <Button swatch="warning" href={buttonHref}>
                      Warning
                    </Button>
                    <Button swatch="info" href={buttonHref}>
                      Info
                    </Button>
                    <Button swatch="light" href={buttonHref}>
                      Light
                    </Button>
                    <Button swatch="dark" href={buttonHref}>
                      Dark
                    </Button>
                    <Button swatch="link" href={buttonHref}>
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
                left: 0,
                bottom: 0,
                width: '100%',
                height: footerHeight,
                justifyContent: 'space-between',
                gap: 10,
                alignItems: 'flex-end',
                // backgroundColor: '#00000005',
                paddingLeft: 72 * 0.5,
                paddingRight: 72 * 0.5,
                paddingBottom: 72 * 0.5,
              }}
              fixed
            >
              <Link
                href="https://github.com/justinmahar/react-pdf-builder"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Box direction="x" gap={10} style={{ alignItems: 'center' }}>
                  <Image
                    src="https://justinmahar.github.io/react-pdf-builder/images/github-250.png"
                    style={{ height: '60%', padding: 2 }}
                  ></Image>
                  <Paragraph style={{ marginBottom: 0 }}>React PDF Builder</Paragraph>
                </Box>
              </Link>
              <PageNumber format="Page %n of %t" />
            </Box>
          </ThemedPage>
        </Document>
      </PDFViewer>
    </div>
  );
};
