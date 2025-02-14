import { Document, Font, Image, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { DivProps } from 'react-html-props';
import { Fonts } from '../../fonts/Fonts';
import { SwatchColor } from '../../themes/ColorScheme';
import { PartialTheme } from '../../themes/Theme';
import { ThemeBuilder, ThemeBuilderConfig } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';
import { BackdropDecorators } from '../backdrops/BackdropDecorators';
import { GradientBackdrop } from '../backdrops/GradientBackdrop';
import { ThemedLink } from '../basics/ThemedLink';
import { ThemedPage } from '../basics/ThemedPage';
import { Button } from '../button/Button';
import { Card } from '../card/Card';
import { CardBody } from '../card/CardBody';
import { CardHeader } from '../card/CardHeader';
import { Box } from '../layout/Box';
import { ListItem } from '../lists/ListItem';
import { OrderedList } from '../lists/OrderedList';
import { UnorderedList } from '../lists/UnorderedList';
import { PageNumber } from '../pages/PageNumber';
import { PageSizeString } from '../pages/PageSizes';
import { CircleShape } from '../shapes/CircleShape';
import { GradientType } from '../shapes/Gradients';
import { RectangleShape } from '../shapes/RectangleShape';
import { Signature } from '../signature/Signature';
import { Table } from '../table/Table';
import { TableCell } from '../table/TableCell';
import { TableRow } from '../table/TableRow';
import { Blockquote } from '../typography/Blockquote';
import { Heading1 } from '../typography/Heading1';
import { Heading2 } from '../typography/Heading2';
import { Heading3 } from '../typography/Heading3';
import { Heading4 } from '../typography/Heading4';
import { Heading5 } from '../typography/Heading5';
import { Heading6 } from '../typography/Heading6';
import { Paragraph } from '../typography/Paragraph';
import { ThemedText } from '../basics/ThemedText';
import { HorizontalRule } from '../hr/HorizontalRule';
import { EllipseShape } from '../shapes/EllipseShape';

export interface DemoProps extends DivProps {
  themeName?: string;
  pageSize?: PageSizeString | { width: number; height: number };
  orientation?: 'portrait' | 'landscape';
  showCoverPage?: boolean;
  override?: PartialTheme;
  scale?: number;
}

/**
 * This is the description for the Demo component
 */
export const Demo = ({
  themeName = 'light',
  pageSize = 'LETTER',
  orientation = 'portrait',
  showCoverPage = true,
  override,
  scale = 1,
  ...props
}: DemoProps) => {
  const buttonHref = 'https://github.com/justinmahar/react-pdf-builder';
  const themeBuilder = themeName === 'dark' ? Themes.dark : Themes.light;

  // Register fonts
  const bodyFont = Fonts.load(Fonts.sansSerif.lato);
  Font.register(bodyFont);
  const titleFont = Fonts.load(Fonts.serif.ebGaramond);
  Font.register(titleFont);
  Font.registerEmojiSource(Fonts.emojis.joyPixels());

  // Disable hyphenation
  Font.registerHyphenationCallback(Fonts.noHyphenation);

  const themeOverride: PartialTheme = {
    classNames: { demo: { backgroundColor: 'lightred', transform: 'rotate(50deg)' } },
    pageProps: { style: { fontFamily: bodyFont?.family } },
  };
  const themeConfig: ThemeBuilderConfig = {
    scale,
    override: ThemeBuilder.overrideTheme(override ?? {}, themeOverride),
  };
  const theme = themeBuilder.build(themeConfig);

  const footerHeight = '12.12%';
  const pagePadding = 72 * 0.5 * scale;

  return (
    <div {...props}>
      <PDFViewer style={{ height: 700, width: 500 }}>
        <Document>
          {showCoverPage && (
            <ThemedPage theme={theme} size={pageSize} orientation={orientation} className="flex-column text-white p-0">
              <GradientBackdrop
                size={pageSize}
                orientation={orientation}
                swatch="blue"
                darken
                darkenAmounts={[0.4, 0.7]}
              >
                {BackdropDecorators.circles3}
              </GradientBackdrop>
              <Box dir="y" className="h-100">
                <Box style={{ height: '5%', backgroundColor: '#00000022' }} />
                <Box style={{ height: '15%' }} />
                <Box
                  dir="y"
                  shrink
                  className="justify-content-center p-4"
                  style={{
                    backgroundColor: '#00000022',
                  }}
                >
                  <Heading1 className="text-center display-3 fw-semibold" style={{ fontFamily: titleFont?.family }}>
                    React PDF Builder
                  </Heading1>
                  <Heading5 className="text-center fs-3 fw-medium">Build beautiful PDF documents in React.</Heading5>
                </Box>
                <Box grow className="justify-content-center align-items-center">
                  <Image
                    src="https://justinmahar.github.io/react-pdf-builder/images/logo-red.png"
                    style={{ width: 200 * scale }}
                  />
                </Box>
                <Box style={{ height: '5%', backgroundColor: '#00000022' }} />
              </Box>
            </ThemedPage>
          )}
          <ThemedPage theme={theme} size={pageSize} orientation={orientation}>
            <GradientBackdrop
              size={pageSize}
              orientation={orientation}
              gradient={[
                { offset: '0%', stopColor: 'red', stopOpacity: 0 },
                { offset: '100%', stopColor: 'red', stopOpacity: 0 },
              ]}
            >
              <RectangleShape
                linearGradientCoords={{ x1: 0.85, y1: 0.5, x2: 0.87, y2: 0 }}
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
                linearGradientCoords={{ x1: 0.81, y1: 0.5, x2: 0.9, y2: 0 }}
                gradient={[
                  { offset: '0%', stopColor: '#000000', stopOpacity: 0 },
                  { offset: '96%', stopColor: '#000000', stopOpacity: 0 },
                  { offset: '96%', stopColor: theme.colorScheme.greyscale.black, stopOpacity: 0.05 },
                  { offset: '100%', stopColor: theme.colorScheme.greyscale.black, stopOpacity: 0.05 },
                ]}
              />
            </GradientBackdrop>
            <Box dir="y" className="gap-2">
              <Heading5 rule>Basic Typography</Heading5>
              <Heading1 rule>Heading 1</Heading1>
              <Heading2 rule>Heading 2</Heading2>
              <Heading3 rule>Heading 3</Heading3>
              <Heading4 rule>Heading 4</Heading4>
              <Heading5 rule>Heading 5</Heading5>
              <Heading6 rule>Heading 6</Heading6>
              <Paragraph className="mb-0">
                Paragraph text. <ThemedLink href="#">This is a link.</ThemedLink>{' '}
                <ThemedText className="fw-bold">This text is bold.</ThemedText>{' '}
                <ThemedText className="fst-italic">This text is italic.</ThemedText> And next, let's try using some
                emojis in this paragraph. ☕️👍✅
              </Paragraph>
              <HorizontalRule />
              <Paragraph>
                Above this paragraph is a horizontal rule. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Below is a signature component.
              </Paragraph>
              <Box dir="y" className="gap-1 ms-auto" style={{ width: 400 * scale }}>
                <Signature x className="mb-0" />
                <Paragraph className="small">Sign here</Paragraph>
              </Box>

              <Heading5 rule break>
                Unordered Lists
              </Heading5>
              <UnorderedList>
                <ListItem>React</ListItem>
                <ListItem>PDF</ListItem>
                <ListItem>Builder</ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </ListItem>
              </UnorderedList>
              <Heading5 rule>Ordered Lists</Heading5>
              <OrderedList>
                <ListItem>List Item A</ListItem>
                <ListItem>List Item B</ListItem>
                <ListItem>List Item C</ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </ListItem>
              </OrderedList>
              <Heading5 rule>Unstyled Lists</Heading5>
              <OrderedList unstyled>
                <ListItem>This list has no bullets or numbers</ListItem>
                <ListItem>Second list item</ListItem>
                <ListItem>Third list item</ListItem>
              </OrderedList>
              <Heading5 rule break>
                Blockquotes
              </Heading5>
              <Box className="gap-3 flex-wrap justify-content-center">
                <Blockquote wrap={false} className="mb-0" style={{ width: 220 * scale }}>
                  Default blockquote
                </Blockquote>
                {Object.keys(theme.colorScheme?.contrast ?? {}).map((swatch, i) => (
                  <Blockquote
                    className="mb-0"
                    wrap={false}
                    break={i > 0 && (i + 1) % 16 === 0}
                    key={`bq-${swatch}`}
                    swatch={swatch as SwatchColor}
                    style={{ width: 220 * scale }}
                  >
                    {`"${swatch}" swatch`}
                  </Blockquote>
                ))}
              </Box>

              <Heading5 rule break>
                Tables
              </Heading5>
              <Heading6>Plain and bordered inside, 80% width</Heading6>
              <Box className="justify-content-center mb-3">
                <Table borderedInside style={{ width: '80%' }}>
                  <TableRow>
                    <TableCell className="justify-content-end text-end">Lorem ipsum</TableCell>
                    <TableCell className="justify-content-end text-center">Consectetur adipiscing elit</TableCell>
                    <TableCell className="justify-content-end">Sed do eiusmod</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-end">Incididunt ut labore</TableCell>
                    <TableCell className="text-center">Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Dolore magna aliqua</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-end">Lorem ipsum dolor</TableCell>
                    <TableCell className="text-center">Consectetur adipiscing elit</TableCell>
                    <TableCell>Sed do eiusmod</TableCell>
                  </TableRow>
                </Table>
              </Box>
              <Heading6>Striped, horizontal bordered, with page wrapping support</Heading6>
              <Table borderedOutside borderedHorizontal striped className="mb-0">
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
              <Table bordered inverseStriped swatch="primary" className="rounded" colWidths={['30%', '50%', '20%']}>
                <TableRow swatch="primary" inverseStriped={false} className="fw-bold">
                  <TableCell>Col 30%</TableCell>
                  <TableCell>Column 50%</TableCell>
                  <TableCell>20%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lorem ipsum dolor</TableCell>
                  <TableCell>This table has the "primary" swatch with inverseStriped</TableCell>
                  <TableCell>Sed do eiusmod</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell swatch="blue">Blue swatch</TableCell>
                  <TableCell>
                    This cell has a horizontal rule with the "blue" swatch.
                    <HorizontalRule swatch="blue" />
                    Sed do eiusmod tempor incididunt ut labore et magna aliqua.
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
                  <Heading5 className="mb-0">Card Title</Heading5>
                </CardHeader>
                <CardBody>
                  <Box className="flex-wrap justify-content-center gap-2">
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
              <Card swatch="primary">
                <CardHeader>
                  <Heading5 className="mb-0">Primary Card</Heading5>
                </CardHeader>
                <CardBody>
                  <Paragraph>
                    Cards can be swatched using theme colors, greyscale colors, or palette colors. Border, background,
                    and the header text contrast color will be configured based on the theme's color scheme.
                  </Paragraph>
                  <Box className="flex-wrap justify-content-center gap-2">
                    <Button swatch="blue" href={buttonHref}>
                      Blue
                    </Button>
                    <Button swatch="indigo" href={buttonHref}>
                      Indigo
                    </Button>
                    <Button swatch="purple" href={buttonHref}>
                      Purple
                    </Button>
                    <Button swatch="pink" href={buttonHref}>
                      Pink
                    </Button>
                    <Button swatch="red" href={buttonHref}>
                      Red
                    </Button>
                    <Button swatch="orange" href={buttonHref}>
                      Orange
                    </Button>
                    <Button swatch="yellow" href={buttonHref}>
                      Yellow
                    </Button>
                    <Button swatch="green" href={buttonHref}>
                      Green
                    </Button>
                    <Button swatch="teal" href={buttonHref}>
                      Teal
                    </Button>
                    <Button swatch="cyan" href={buttonHref}>
                      Cyan
                    </Button>
                  </Box>
                </CardBody>
              </Card>
              <Heading5 rule break>
                Layout
              </Heading5>
              <Heading6>Horizontal Box</Heading6>
              <Box>
                <Box grow className="justify-content-center align-items-center border border-end-0 p-3">
                  <Paragraph className="mb-0">Grow</Paragraph>
                </Box>
                <Box className="justify-content-center align-items-center border border-end-0 p-3">
                  <Paragraph className="mb-0">Shrink</Paragraph>
                </Box>
                <Box dir="y" className="justify-content-center align-items-center border text-justify w-50 p-3">
                  <Paragraph>Width 50%. Text justified. Specify a width to allow text wrapping.</Paragraph>
                  <Paragraph className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Paragraph>
                </Box>
              </Box>
              <Box className="mb-3 gap-2">
                <Box grow className="justify-content-center align-items-center border py-2 px-3">
                  <Paragraph className="mb-0">Grow</Paragraph>
                </Box>
                <Box shrink className="justify-content-center align-items-center border py-2 px-3">
                  <Paragraph className="mb-0">Shrink</Paragraph>
                </Box>
                <Box className="justify-content-center align-items-center border py-2 px-3 w-50">
                  <Paragraph className="mb-0">50%</Paragraph>
                </Box>
              </Box>
              <Blockquote swatch="info">
                <Box className="gap-3">
                  <ThemedText>ℹ️</ThemedText>
                  <ThemedText>Borders have been added to visualize boundaries.</ThemedText>
                </Box>
              </Blockquote>
              <Heading6 break>Vertical Box</Heading6>
              <Box dir="y" className="mb-3">
                <Box className="justify-content-center align-items-center border border-bottom-0 p-3">
                  <Paragraph className="mb-0">A</Paragraph>
                </Box>
                <Box className="justify-content-center align-items-center border border-bottom-0 p-3">
                  <Paragraph className="mb-0">B</Paragraph>
                </Box>
                <Box dir="y" className="justify-content-center align-items-center border text-justify p-3">
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </Paragraph>
                  <Paragraph className="mb-0">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                  </Paragraph>
                </Box>
              </Box>
              <Blockquote swatch="info">
                <Box className="gap-3">
                  <ThemedText>ℹ️</ThemedText>
                  <ThemedText>Borders have been added to visualize boundaries.</ThemedText>
                </Box>
              </Blockquote>
              <Heading5 rule break>
                SVG Shapes
              </Heading5>
              <Paragraph>
                Shape components are available for circles, ellipses, rectangles, and squares. These components make SVG
                sizing, gradients, and strokes convenient for these four simple shapes so you can focus on bringing your
                design to life.
              </Paragraph>
              <Heading6 rule>Circles & Ellipses</Heading6>
              <Box className="mb-4 gap-4">
                <Box>
                  <CircleShape size={75 * scale} fill="red" />
                </Box>
                <Box style={{ padding: 10 * scale }}>
                  <EllipseShape
                    width={100 * scale}
                    height={60 * scale}
                    gradient={['yellow', 'maroon']}
                    ellipseProps={{ stroke: 'maroon', strokeWidth: 2 * scale }}
                    gradientType={GradientType.radial}
                    style={{ transform: 'rotate(15deg)' }}
                  />
                </Box>
              </Box>
              <Heading6 rule>Rectangles & Squares</Heading6>
              <Box className="mb-4 gap-4">
                <Box>
                  <RectangleShape width={75 * scale} height={150 * scale} fill="orange" color="red" />
                </Box>
                <Box>
                  <RectangleShape
                    className="mt-3 ms-4"
                    width={75 * scale}
                    height={75 * scale}
                    gradient={['lightblue', 'darkblue']}
                    gradientType={GradientType.topLeftToBottomRight}
                    rectProps={{ stroke: 'darkblue', strokeWidth: 3 * scale }}
                    style={{ transform: 'rotate(15deg)' }}
                  />
                </Box>
              </Box>
              <Paragraph>
                Shapes can be rotated, scaled, and skewed using the CSS transform style. Additional SVG components are
                available for more advanced SVG creation.
              </Paragraph>
            </Box>
            <Box
              fixed
              className="position-absolute start-0 bottom-0 w-100 justify-content-between gap-2 align-items-end"
              style={{
                height: footerHeight,
                paddingLeft: pagePadding,
                paddingRight: pagePadding,
                paddingBottom: pagePadding,
              }}
            >
              <ThemedLink href="https://github.com/justinmahar/react-pdf-builder" className="text-decoration-none">
                React PDF Builder
              </ThemedLink>
              <PageNumber format="Page %n of %t" />
            </Box>
          </ThemedPage>
        </Document>
      </PDFViewer>
    </div>
  );
};
