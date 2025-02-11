import { PageProps, TextProps } from '@react-pdf/renderer';
import { CardProps } from '../card/Card';
import { CardBodyProps } from '../card/CardBody';
import { CardHeaderProps } from '../card/CardHeader';
import { HeadingProps } from '../typography/Heading';
import { ParagraphProps } from '../typography/Paragraph';
import { PageNumberProps } from '../pages/PageNumber';
import { UnorderedListProps } from '../lists/UnorderedList';
import { OrderedListProps } from '../lists/OrderedList';
import { TableCellProps } from '../table/TableCell';
import { TableRowProps } from '../table/TableRow';
import { TableProps } from '../table/Table';
import { ListItemProps } from '../lists/ListItem';
import { ListItemContainerProps } from '../lists/ListItemContainer';
import { ButtonProps } from '../button/Button';
import { ColorScheme } from './ColorScheme';
import { DeepPartial } from '../util';
import { ThemedLinkProps } from '../link/ThemedLink';
import { SignatureProps } from '../signature/Signature';
import { BlockquoteProps } from '../typography/Blockquote';

export interface Theme {
  // Color scheme
  colorScheme: ColorScheme;
  /** This color is exposed for convenience when working with the theme and cannot be overridden directly. To override the background color, override the `backgroundColor` style in `pageProps.style` when building the theme. */
  _bodyBackgroundColor: string;
  /** This color is exposed for convenience when working with the theme and cannot be overridden directly. To override the page color, override the `color` style in `pageProps.style` when building the theme. */
  _bodyColor: string;

  // Button
  buttonProps: ButtonProps;
  // Card
  cardProps: CardProps;
  cardBodyProps: CardBodyProps;
  cardHeaderProps: CardHeaderProps;
  // Link
  linkProps: ThemedLinkProps;
  // Lists
  listItemProps: ListItemProps;
  listItemContainerProps: ListItemContainerProps;
  listItemMarkerProps: TextProps;
  unorderedListProps: UnorderedListProps;
  orderedListProps: OrderedListProps;
  // Pages
  pageProps: PageProps;
  pageNumberProps: PageNumberProps;
  // Signature
  signatureProps: SignatureProps;
  // Table
  tableProps: TableProps;
  tableCellProps: TableCellProps;
  tableRowProps: TableRowProps;
  // Typography
  blockquoteProps: BlockquoteProps;
  headingProps: HeadingProps;
  heading1Props: HeadingProps;
  heading2Props: HeadingProps;
  heading3Props: HeadingProps;
  heading4Props: HeadingProps;
  heading5Props: HeadingProps;
  heading6Props: HeadingProps;
  paragraphProps: ParagraphProps;
}

export type PartialTheme = DeepPartial<Theme>;
