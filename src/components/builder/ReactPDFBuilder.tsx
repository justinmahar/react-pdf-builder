import { ImageProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { GradientBackdrop, GradientBackdropProps } from '../backdrops/GradientBackdrop';
import { ThemedCanvas, ThemedCanvasProps } from '../basics/ThemedCanvas';
import { ThemedImage, ThemedImageProps } from '../basics/ThemedImage';
import { ThemedSvg, ThemedSvgProps } from '../basics/ThemedSvg';
import { ThemedText, ThemedTextProps } from '../basics/ThemedText';
import { ThemedView, ThemedViewProps } from '../basics/ThemedView';
import { Button, ButtonProps } from '../button/Button';
import { Card, CardProps } from '../card/Card';
import { CardBody, CardBodyProps } from '../card/CardBody';
import { CardHeader, CardHeaderProps } from '../card/CardHeader';
import { Box, BoxProps } from '../layout/Box';
import { ThemedLink, ThemedLinkProps } from '../link/ThemedLink';
import { ListItem, ListItemProps } from '../lists/ListItem';
import { OrderedList, OrderedListProps } from '../lists/OrderedList';
import { UnorderedList, UnorderedListProps } from '../lists/UnorderedList';
import { PageNumber, PageNumberProps } from '../pages/PageNumber';
import { ThemedPage, ThemedPageProps } from '../pages/ThemedPage';
import { CircleShape, CircleShapeProps } from '../shapes/CircleShape';
import { EllipseShape, EllipseShapeProps } from '../shapes/EllipseShape';
import { LineShape, LineShapeProps } from '../shapes/LineShape';
import { RectangleShape, RectangleShapeProps } from '../shapes/RectangleShape';
import { SquareShape, SquareShapeProps } from '../shapes/SquareShape';
import { Signature, SignatureProps } from '../signature/Signature';
import { Table, TableProps } from '../table/Table';
import { TableCell, TableCellProps } from '../table/TableCell';
import { TableRow, TableRowProps } from '../table/TableRow';
import { Blockquote, BlockquoteProps } from '../typography/Blockquote';
import { HeadingProps } from '../typography/Heading';
import { Heading1 } from '../typography/Heading1';
import { Heading2 } from '../typography/Heading2';
import { Heading3 } from '../typography/Heading3';
import { Heading4 } from '../typography/Heading4';
import { Heading5 } from '../typography/Heading5';
import { Heading6 } from '../typography/Heading6';
import { Paragraph, ParagraphProps } from '../typography/Paragraph';

export class ReactPDFBuilder {
  public GradientBackdrop;
  public Button;
  public Card;
  public CardBody;
  public CardHeader;
  public Box;
  public Link;
  public ListItem;
  public OrderedList;
  public UnorderedList;
  public PageNumber;
  public Page;
  public CircleShape;
  public EllipseShape;
  public LineShape;
  public RectangleShape;
  public SquareShape;
  public Table;
  public TableRow;
  public TableCell;
  public Blockquote;
  public Heading1;
  public Heading2;
  public Heading3;
  public Heading4;
  public Heading5;
  public Heading6;
  public Paragraph;
  public Signature;
  public Canvas;
  public Image;
  public Svg;
  public Text;
  public View;

  constructor(public theme: Theme = Themes.default.build()) {
    this.GradientBackdrop = ({ children, ...props }: GradientBackdropProps) => (
      <GradientBackdrop theme={theme} {...props}>
        {children}
      </GradientBackdrop>
    );
    this.Button = ({ children, ...props }: ButtonProps) => (
      <Button theme={theme} {...props}>
        {children}
      </Button>
    );
    this.Card = ({ children, ...props }: CardProps) => (
      <Card theme={theme} {...props}>
        {children}
      </Card>
    );
    this.CardBody = ({ children, ...props }: CardBodyProps) => (
      <CardBody theme={theme} {...props}>
        {children}
      </CardBody>
    );
    this.CardHeader = ({ children, ...props }: CardHeaderProps) => (
      <CardHeader theme={theme} {...props}>
        {children}
      </CardHeader>
    );
    this.Box = ({ children, ...props }: BoxProps) => (
      <Box theme={theme} {...props}>
        {children}
      </Box>
    );
    this.Link = ({ children, ...props }: ThemedLinkProps) => (
      <ThemedLink theme={theme} {...props}>
        {children}
      </ThemedLink>
    );
    this.ListItem = ({ children, ...props }: ListItemProps) => (
      <ListItem theme={theme} {...props}>
        {children}
      </ListItem>
    );
    this.OrderedList = ({ children, ...props }: OrderedListProps) => (
      <OrderedList theme={theme} {...props}>
        {children}
      </OrderedList>
    );
    this.UnorderedList = ({ children, ...props }: UnorderedListProps) => (
      <UnorderedList theme={theme} {...props}>
        {children}
      </UnorderedList>
    );
    this.PageNumber = ({ ...props }: PageNumberProps) => <PageNumber theme={theme} {...props} />;
    this.Page = ({ children, ...props }: ThemedPageProps) => (
      <ThemedPage theme={theme} {...props}>
        {children}
      </ThemedPage>
    );
    this.CircleShape = ({ ...props }: CircleShapeProps) => <CircleShape theme={theme} {...props} />;
    this.EllipseShape = ({ ...props }: EllipseShapeProps) => <EllipseShape theme={theme} {...props} />;
    this.LineShape = ({ ...props }: LineShapeProps) => <LineShape theme={theme} {...props} />;
    this.RectangleShape = ({ ...props }: RectangleShapeProps) => <RectangleShape theme={theme} {...props} />;
    this.SquareShape = ({ ...props }: SquareShapeProps) => <SquareShape theme={theme} {...props} />;
    this.Table = ({ children, ...props }: TableProps) => (
      <Table theme={theme} {...props}>
        {children}
      </Table>
    );
    this.TableRow = ({ children, ...props }: TableRowProps) => (
      <TableRow theme={theme} {...props}>
        {children}
      </TableRow>
    );
    this.TableCell = ({ children, ...props }: TableCellProps) => (
      <TableCell theme={theme} {...props}>
        {children}
      </TableCell>
    );
    this.Blockquote = ({ children, ...props }: BlockquoteProps) => (
      <Blockquote theme={theme} {...props}>
        {children}
      </Blockquote>
    );
    this.Heading1 = ({ children, ...props }: HeadingProps) => (
      <Heading1 theme={theme} {...props}>
        {children}
      </Heading1>
    );
    this.Heading2 = ({ children, ...props }: HeadingProps) => (
      <Heading2 theme={theme} {...props}>
        {children}
      </Heading2>
    );
    this.Heading3 = ({ children, ...props }: HeadingProps) => (
      <Heading3 theme={theme} {...props}>
        {children}
      </Heading3>
    );
    this.Heading4 = ({ children, ...props }: HeadingProps) => (
      <Heading4 theme={theme} {...props}>
        {children}
      </Heading4>
    );
    this.Heading5 = ({ children, ...props }: HeadingProps) => (
      <Heading5 theme={theme} {...props}>
        {children}
      </Heading5>
    );
    this.Heading6 = ({ children, ...props }: HeadingProps) => (
      <Heading6 theme={theme} {...props}>
        {children}
      </Heading6>
    );
    this.Paragraph = ({ children, ...props }: ParagraphProps) => (
      <Paragraph theme={theme} {...props}>
        {children}
      </Paragraph>
    );
    this.Signature = ({ children, ...props }: SignatureProps) => (
      <Signature theme={theme} {...props}>
        {children}
      </Signature>
    );
    this.Canvas = ({ ...props }: ThemedCanvasProps) => <ThemedCanvas theme={theme} {...props} />;
    this.Image = ({ ...props }: ImageProps & ThemedImageProps) => <ThemedImage theme={theme} {...props} />;
    this.Svg = ({ children, ...props }: ThemedSvgProps) => (
      <ThemedSvg theme={theme} {...props}>
        {children}
      </ThemedSvg>
    );
    this.Text = ({ children, ...props }: ThemedTextProps) => (
      <ThemedText theme={theme} {...props}>
        {children}
      </ThemedText>
    );
    this.View = ({ children, ...props }: ThemedViewProps) => (
      <ThemedView theme={theme} {...props}>
        {children}
      </ThemedView>
    );
  }
}
