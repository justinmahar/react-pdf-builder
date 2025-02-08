import { Document, Image, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { DivProps } from 'react-html-props';
import { BackdropDecorators } from './backgrounds/BackdropDecorators';
import { ReactPDFBuilder } from './builder/ReactPDFBuilder';
import { GradientType } from './shapes/Gradients';
import { RectangleShape } from './shapes/RectangleShape';
import { SwatchColor } from './theme/themes/ColorScheme';
import { Themes } from './theme/themes/Themes';

export interface KitchenSinkProps extends DivProps {}

/**
 * This is the description for the KitchenSink component
 */
export const KitchenSink = ({ ...props }: KitchenSinkProps) => {
  const buttonHref = 'https://github.com/justinmahar/react-pdf-builder';
  const footerHeight = '12.12%';
  const showCoverPage = true;
  const pageSize = 'LETTER';
  const orientation = 'portrait';

  const scale = 1;
  const theme = Themes.light.build({ scale });
  const RPB = new ReactPDFBuilder(theme);
  const bodyColor = theme._bodyColor;

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
            <RPB.Page
              size={pageSize}
              orientation={orientation}
              style={{ flexDirection: 'column', color: 'white', padding: 0 }}
            >
              <RPB.GradientBackdrop size={pageSize} orientation={orientation} swatch="blue" darken>
                {BackdropDecorators.circles3}
              </RPB.GradientBackdrop>
              <RPB.Box direction="y" style={{ height: '100%' }}>
                <RPB.Box style={{ height: '5%', backgroundColor: '#00000022' }} />
                <RPB.Box style={{ height: '15%' }} />
                <RPB.Box
                  shrink
                  style={{
                    justifyContent: 'center',
                    padding: 30 * scale,
                    backgroundColor: '#00000022',
                  }}
                >
                  <RPB.Heading1 style={{ textAlign: 'center', fontSize: 60 * scale }}>React PDF Builder</RPB.Heading1>
                  <RPB.Heading5 style={{ textAlign: 'center', fontSize: 28 * scale }}>
                    Build beautiful PDF documents in React.
                  </RPB.Heading5>
                </RPB.Box>
                <RPB.Box grow style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    src="https://justinmahar.github.io/react-pdf-builder/images/logo-red.png"
                    style={{ width: 250 * scale }}
                  />
                </RPB.Box>
                <RPB.Box style={{ height: '5%', backgroundColor: '#00000022' }} />
              </RPB.Box>
            </RPB.Page>
          )}
          <RPB.Page size={pageSize} orientation={orientation}>
            <RPB.GradientBackdrop size={pageSize} orientation={orientation} swatch="white">
              <RectangleShape
                linearGradientCoords={{ x1: 0.81, y1: 0.5, x2: 0.9, y2: 0 }}
                gradient={[
                  { offset: '0%', stopColor: '#000000', stopOpacity: 0 },
                  { offset: '96%', stopColor: '#000000', stopOpacity: 0 },
                  { offset: '96%', stopColor: theme.colorScheme.greyscale.black, stopOpacity: 0.05 },
                  { offset: '100%', stopColor: theme.colorScheme.greyscale.black, stopOpacity: 0.05 },
                ]}
              />
              <RectangleShape
                linearGradientCoords={{ x1: 0.83, y1: 0.5, x2: 0.88, y2: 0 }}
                gradient={[
                  { offset: '0%', stopColor: '#000000', stopOpacity: 0 },
                  { offset: '96%', stopColor: '#000000', stopOpacity: 0 },
                  { offset: '96%', stopColor: theme.colorScheme.greyscale.black, stopOpacity: 0.05 },
                  { offset: '100%', stopColor: theme.colorScheme.greyscale.black, stopOpacity: 0.05 },
                ]}
              />
              <RectangleShape
                linearGradientCoords={{ x1: 0.85, y1: 0.5, x2: 0.87, y2: 0 }}
                gradient={[
                  { offset: '0%', stopColor: '#000000', stopOpacity: 0 },
                  { offset: '96%', stopColor: '#000000', stopOpacity: 0 },
                  { offset: '96%', stopColor: theme.colorScheme.greyscale.black, stopOpacity: 0.05 },
                  { offset: '100%', stopColor: theme.colorScheme.greyscale.black, stopOpacity: 0.05 },
                ]}
              />
            </RPB.GradientBackdrop>
            <RPB.Box direction="y" style={{ gap: 10 * scale }}>
              <RPB.Heading5 rule>Basic Typography</RPB.Heading5>
              <RPB.Heading1 rule>Heading 1</RPB.Heading1>
              <RPB.Heading2 rule>Heading 2</RPB.Heading2>
              <RPB.Heading3 rule>Heading 3</RPB.Heading3>
              <RPB.Heading4 rule>Heading 4</RPB.Heading4>
              <RPB.Heading5 rule>Heading 5</RPB.Heading5>
              <RPB.Heading6 rule>Heading 6</RPB.Heading6>
              <RPB.Paragraph>
                Paragraph text. <RPB.Link href="#">This is a link.</RPB.Link> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </RPB.Paragraph>
              <RPB.Box gap={8 * scale} style={{ marginLeft: 'auto', width: 400 * scale }}>
                <RPB.Signature x />
                <RPB.Paragraph style={{ fontSize: 16 * scale }}>Sign here</RPB.Paragraph>
              </RPB.Box>

              <RPB.Heading5 rule break>
                Unordered Lists
              </RPB.Heading5>
              <RPB.UnorderedList>
                <RPB.ListItem>React</RPB.ListItem>
                <RPB.ListItem>PDF</RPB.ListItem>
                <RPB.ListItem>Builder</RPB.ListItem>
                <RPB.ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </RPB.ListItem>
              </RPB.UnorderedList>
              <RPB.Heading5 rule>Ordered Lists</RPB.Heading5>
              <RPB.OrderedList>
                <RPB.ListItem>List Item A</RPB.ListItem>
                <RPB.ListItem>List Item B</RPB.ListItem>
                <RPB.ListItem>List Item C</RPB.ListItem>
                <RPB.ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </RPB.ListItem>
              </RPB.OrderedList>
              <RPB.Heading5 rule>Unstyled Lists</RPB.Heading5>
              <RPB.OrderedList unstyled>
                <RPB.ListItem>This list has no bullets or numbers</RPB.ListItem>
                <RPB.ListItem>Second list item</RPB.ListItem>
                <RPB.ListItem>Third list item</RPB.ListItem>
              </RPB.OrderedList>
              <RPB.Heading5 rule break>
                Blockquotes
              </RPB.Heading5>
              <RPB.Box direction="x" gap={20 * scale} style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                <RPB.Blockquote wrap={false} style={{ width: 220 * scale }}>
                  Default blockquote
                </RPB.Blockquote>
                {Object.keys(theme.colorScheme?.contrast ?? {}).map((swatch) => (
                  <RPB.Blockquote
                    wrap={false}
                    key={`bq-${swatch}`}
                    swatch={swatch as SwatchColor}
                    style={{ width: 220 * scale }}
                  >
                    {`"${swatch}" swatch`}
                  </RPB.Blockquote>
                ))}
              </RPB.Box>

              <RPB.Heading5 rule break>
                Tables
              </RPB.Heading5>
              <RPB.Heading6>Plain and bordered inside, 80% width</RPB.Heading6>
              <RPB.Box direction="x" style={{ justifyContent: 'center' }}>
                <RPB.Table borderedInside style={{ width: '80%' }}>
                  <RPB.TableRow>
                    <RPB.TableCell style={{ textAlign: 'right' }}>Lorem ipsum dolor</RPB.TableCell>
                    <RPB.TableCell style={{ textAlign: 'center' }}>Consectetur adipiscing elit</RPB.TableCell>
                    <RPB.TableCell>Sed do eiusmod</RPB.TableCell>
                  </RPB.TableRow>
                  <RPB.TableRow>
                    <RPB.TableCell style={{ textAlign: 'right' }}>Incididunt ut labore</RPB.TableCell>
                    <RPB.TableCell style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet</RPB.TableCell>
                    <RPB.TableCell>Dolore magna aliqua</RPB.TableCell>
                  </RPB.TableRow>
                  <RPB.TableRow>
                    <RPB.TableCell style={{ textAlign: 'right' }}>Lorem ipsum dolor</RPB.TableCell>
                    <RPB.TableCell style={{ textAlign: 'center' }}>Consectetur adipiscing elit</RPB.TableCell>
                    <RPB.TableCell>Sed do eiusmod</RPB.TableCell>
                  </RPB.TableRow>
                </RPB.Table>
              </RPB.Box>
              <RPB.Heading6>Striped, horizontal bordered, with page wrapping support</RPB.Heading6>
              <RPB.Box style={{ position: 'relative', marginBottom: 10 * scale }}>
                <RPB.Table borderedOutside borderedHorizontal striped style={{ marginBottom: 0 }}>
                  <RPB.TableRow>
                    <RPB.TableCell>Lorem ipsum dolor</RPB.TableCell>
                    <RPB.TableCell>Consectetur adipiscing elit</RPB.TableCell>
                    <RPB.TableCell>Sed do eiusmod</RPB.TableCell>
                  </RPB.TableRow>
                  <RPB.TableRow>
                    <RPB.TableCell>Incididunt ut labore</RPB.TableCell>
                    <RPB.TableCell>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et magna aliqua.
                    </RPB.TableCell>
                    <RPB.TableCell>Dolore magna aliqua</RPB.TableCell>
                  </RPB.TableRow>
                  <RPB.TableRow>
                    <RPB.TableCell>Lorem ipsum dolor</RPB.TableCell>
                    <RPB.TableCell>Consectetur adipiscing elit</RPB.TableCell>
                    <RPB.TableCell>Sed do eiusmod</RPB.TableCell>
                  </RPB.TableRow>
                  <RPB.TableRow>
                    <RPB.TableCell>Incididunt ut labore</RPB.TableCell>
                    <RPB.TableCell>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et magna aliqua.
                    </RPB.TableCell>
                    <RPB.TableCell>Dolore magna aliqua</RPB.TableCell>
                  </RPB.TableRow>
                  <RPB.TableRow>
                    <RPB.TableCell>Lorem ipsum dolor</RPB.TableCell>
                    <RPB.TableCell>Consectetur adipiscing elit</RPB.TableCell>
                    <RPB.TableCell>Sed do eiusmod</RPB.TableCell>
                  </RPB.TableRow>
                  <RPB.TableRow>
                    <RPB.TableCell>Lorem ipsum dolor</RPB.TableCell>
                    <RPB.TableCell>Consectetur adipiscing elit</RPB.TableCell>
                    <RPB.TableCell>Sed do eiusmod</RPB.TableCell>
                  </RPB.TableRow>
                </RPB.Table>
              </RPB.Box>
              <RPB.Heading6>Styled with column widths 30%, 50%, 20%</RPB.Heading6>
              <RPB.Table
                bordered
                inverseStriped
                swatch="primary"
                style={{ borderRadius: 10 * scale }}
                colWidths={['30%', '50%', '20%']}
              >
                <RPB.TableRow swatch="primary" inverseStriped={false}>
                  <RPB.TableCell>
                    <RPB.Heading6 style={{ marginBottom: 0 }}>Col 30% </RPB.Heading6>
                  </RPB.TableCell>
                  <RPB.TableCell>
                    <RPB.Heading6 style={{ marginBottom: 0 }}>Column 50%</RPB.Heading6>
                  </RPB.TableCell>
                  <RPB.TableCell>
                    <RPB.Heading6 style={{ marginBottom: 0 }}>20%</RPB.Heading6>
                  </RPB.TableCell>
                </RPB.TableRow>
                <RPB.TableRow>
                  <RPB.TableCell>Lorem ipsum dolor</RPB.TableCell>
                  <RPB.TableCell>This table has the "primary" swatch with inverseStriped</RPB.TableCell>
                  <RPB.TableCell>Sed do eiusmod</RPB.TableCell>
                </RPB.TableRow>
                <RPB.TableRow>
                  <RPB.TableCell swatch="blue">Blue swatch</RPB.TableCell>
                  <RPB.TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et magna aliqua.
                  </RPB.TableCell>
                  <RPB.TableCell>Dolore magna aliqua</RPB.TableCell>
                </RPB.TableRow>
                <RPB.TableRow colWidths={['80%', '20%']}>
                  <RPB.TableCell>
                    This row has only two cells. The first is 80%, the second is 20%. This imitates a colspan.
                  </RPB.TableCell>
                  <RPB.TableCell swatch="teal">Teal swatch</RPB.TableCell>
                </RPB.TableRow>
                <RPB.TableRow colWidths={['50%', '50%']}>
                  <RPB.TableCell>50% col width</RPB.TableCell>
                  <RPB.TableCell>50% col width</RPB.TableCell>
                </RPB.TableRow>
              </RPB.Table>
              <RPB.Heading5 rule break>
                Cards &amp; Buttons
              </RPB.Heading5>
              <RPB.Card>
                <RPB.CardHeader>
                  <RPB.Heading5 style={{ marginBottom: 0 }}>Card Title</RPB.Heading5>
                </RPB.CardHeader>
                <RPB.CardBody withHeader>
                  <RPB.Box direction="x" style={{ flexWrap: 'wrap', justifyContent: 'center', gap: '10' }}>
                    <RPB.Button swatch="primary" href={buttonHref}>
                      Primary
                    </RPB.Button>
                    <RPB.Button swatch="secondary" href={buttonHref}>
                      Secondary
                    </RPB.Button>
                    <RPB.Button swatch="success" href={buttonHref}>
                      Success
                    </RPB.Button>
                    <RPB.Button swatch="danger" href={buttonHref}>
                      Danger
                    </RPB.Button>
                    <RPB.Button swatch="warning" href={buttonHref}>
                      Warning
                    </RPB.Button>
                    <RPB.Button swatch="info" href={buttonHref}>
                      Info
                    </RPB.Button>
                    <RPB.Button swatch="light" href={buttonHref}>
                      Light
                    </RPB.Button>
                    <RPB.Button swatch="dark" href={buttonHref}>
                      Dark
                    </RPB.Button>
                    <RPB.Button swatch="link" href={buttonHref}>
                      Link
                    </RPB.Button>
                  </RPB.Box>
                </RPB.CardBody>
              </RPB.Card>
              <RPB.Card swatch="primary">
                <RPB.CardHeader>
                  <RPB.Heading5 style={{ marginBottom: 0 }}>Primary Card</RPB.Heading5>
                </RPB.CardHeader>
                <RPB.CardBody withHeader>
                  <RPB.Paragraph>
                    Cards can be swatched using theme colors, greyscale colors, or palette colors. Border, background,
                    and the header text contrast color will be configured based on the theme's color scheme.
                  </RPB.Paragraph>
                  <RPB.Box direction="x" style={{ flexWrap: 'wrap', justifyContent: 'center', gap: 10 * scale }}>
                    <RPB.Button swatch="blue" href={buttonHref}>
                      Blue
                    </RPB.Button>
                    <RPB.Button swatch="indigo" href={buttonHref}>
                      Indigo
                    </RPB.Button>
                    <RPB.Button swatch="purple" href={buttonHref}>
                      Purple
                    </RPB.Button>
                    <RPB.Button swatch="pink" href={buttonHref}>
                      Pink
                    </RPB.Button>
                    <RPB.Button swatch="red" href={buttonHref}>
                      Red
                    </RPB.Button>
                    <RPB.Button swatch="orange" href={buttonHref}>
                      Orange
                    </RPB.Button>
                    <RPB.Button swatch="yellow" href={buttonHref}>
                      Yellow
                    </RPB.Button>
                    <RPB.Button swatch="green" href={buttonHref}>
                      Green
                    </RPB.Button>
                    <RPB.Button swatch="teal" href={buttonHref}>
                      Teal
                    </RPB.Button>
                    <RPB.Button swatch="cyan" href={buttonHref}>
                      Cyan
                    </RPB.Button>
                  </RPB.Box>
                </RPB.CardBody>
              </RPB.Card>
              <RPB.Heading5 rule break>
                Layout
              </RPB.Heading5>
              <RPB.Heading6>Horizontal Box</RPB.Heading6>
              <RPB.Box direction="x">
                <RPB.Box
                  grow
                  padding={10 * scale}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1 * scale,
                    borderRight: 0,
                    borderColor: theme.colorScheme?.greyscale.gray500,
                  }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>Grow</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  padding={10 * scale}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1 * scale,
                    borderRight: 0,
                    borderColor: theme.colorScheme?.greyscale.gray500,
                  }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>Shrink</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  direction="y"
                  padding={10 * scale}
                  style={{
                    width: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1 * scale,
                    borderColor: theme.colorScheme?.greyscale.gray500,
                    textAlign: 'justify',
                  }}
                >
                  <RPB.Paragraph>Width 50%. Specify a width to allow text wrapping.</RPB.Paragraph>
                  <RPB.Paragraph style={{ marginBottom: 0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </RPB.Paragraph>
                </RPB.Box>
              </RPB.Box>
              <RPB.Box direction="x" gap={10} style={{ marginBottom: 20 * scale }}>
                <RPB.Box
                  grow
                  padding={10 * scale}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1 * scale,
                    borderColor: theme.colorScheme?.greyscale.gray500,
                  }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>Grow</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  shrink
                  padding={10 * scale}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1 * scale,
                    borderColor: theme.colorScheme?.greyscale.gray500,
                  }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>Shrink</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  padding={10 * scale}
                  style={{
                    width: '40%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1 * scale,
                    borderColor: theme.colorScheme?.greyscale.gray500,
                  }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>40%</RPB.Paragraph>
                </RPB.Box>
              </RPB.Box>
              <RPB.Paragraph>Note: Borders have been added for demonstration purposes.</RPB.Paragraph>
              <RPB.Heading6 break>Vertical Box</RPB.Heading6>
              <RPB.Box direction="y" style={{ marginBottom: 20 * scale }}>
                <RPB.Box
                  padding={10 * scale}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1 * scale,
                    borderBottom: 0,
                    borderColor: theme.colorScheme?.greyscale.gray500,
                  }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>A</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  grow
                  padding={10 * scale}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1 * scale,
                    borderBottom: 0,
                    borderColor: theme.colorScheme?.greyscale.gray500,
                  }}
                >
                  <RPB.Paragraph style={{ marginBottom: 0 }}>B</RPB.Paragraph>
                </RPB.Box>
                <RPB.Box
                  direction="y"
                  padding={10 * scale}
                  style={{
                    justifyContent: 'center',
                    borderWidth: 1 * scale,
                    borderColor: theme.colorScheme?.greyscale.gray500,
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
              <RPB.Paragraph>Note: Borders have been added for demonstration purposes.</RPB.Paragraph>
              <RPB.Heading5 rule break>
                Shapes
              </RPB.Heading5>
              <RPB.Box direction="x" gap={20 * scale}>
                <RPB.Box>
                  <RPB.CircleShape size={75 * scale} fill="red" />
                </RPB.Box>
                <RPB.Box style={{ padding: 10 * scale }}>
                  <RPB.CircleShape
                    size={100 * scale}
                    gradient={['white', 'darkgray']}
                    ellipseProps={{ stroke: 'green', strokeWidth: 5 * scale }}
                    gradientType={GradientType.radial}
                  />
                </RPB.Box>
                <RPB.Box style={{ transform: 'rotate(20deg)', marginTop: 20 * scale }}>
                  <RPB.LineShape
                    length={200 * scale}
                    width={5 * scale}
                    gradient={['white', 'blue']}
                    gradientType={GradientType.leftToRight}
                  />
                </RPB.Box>
              </RPB.Box>
              <RPB.Box direction="x" gap={20 * scale}>
                <RPB.Box>
                  <RPB.RectangleShape width={75 * scale} height={150 * scale} fill="orange" color="red" />
                </RPB.Box>
                <RPB.Box>
                  <RPB.RectangleShape
                    width={150 * scale}
                    height={150 * scale}
                    gradient={['lightblue', 'darkblue']}
                    gradientType={GradientType.topLeftToBottomRight}
                    style={{ transform: 'rotate(-15deg)', marginLeft: 30 * scale }}
                  />
                </RPB.Box>
              </RPB.Box>
            </RPB.Box>
            <RPB.Box
              direction="x"
              style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                height: footerHeight,
                justifyContent: 'space-between',
                gap: 10 * scale,
                alignItems: 'flex-end',
                // backgroundColor: '#00000005',
                paddingLeft: 72 * 0.5 * scale,
                paddingRight: 72 * 0.5 * scale,
                paddingBottom: 72 * 0.5 * scale,
              }}
              fixed
            >
              <RPB.Paragraph style={{ marginBottom: 0 }}>
                <RPB.Link
                  href="https://github.com/justinmahar/react-pdf-builder"
                  style={{ textDecoration: 'none', color: bodyColor }}
                >
                  React PDF Builder
                </RPB.Link>
              </RPB.Paragraph>
              <RPB.PageNumber format="Page %n of %t" />
            </RPB.Box>
          </RPB.Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
