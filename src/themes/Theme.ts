import { TextProps } from '@react-pdf/renderer';
import { ThemedLinkProps } from '../components/basics/ThemedLink';
import { ThemedPageProps } from '../components/basics/ThemedPage';
import { ButtonProps } from '../components/button/Button';
import { CardProps } from '../components/card/Card';
import { CardBodyProps } from '../components/card/CardBody';
import { CardHeaderProps } from '../components/card/CardHeader';
import { HorizontalRuleProps } from '../components/hr/HorizontalRule';
import { ListItemProps } from '../components/lists/ListItem';
import { ListItemContainerProps } from '../components/lists/ListItemContainer';
import { OrderedListProps } from '../components/lists/OrderedList';
import { UnorderedListProps } from '../components/lists/UnorderedList';
import { PageNumberProps } from '../components/pages/PageNumber';
import { SignatureProps } from '../components/signature/Signature';
import { TableProps } from '../components/table/Table';
import { TableCellProps } from '../components/table/TableCell';
import { TableRowProps } from '../components/table/TableRow';
import { BlockquoteProps } from '../components/typography/Blockquote';
import { HeadingProps } from '../components/typography/Heading';
import { ParagraphProps } from '../components/typography/Paragraph';
import { DeepPartial } from '../util/util';
import { ClassNames } from './classnames/ClassNames';
import { ColorScheme } from './ColorScheme';

export interface Theme {
  // Color scheme
  colorScheme: ColorScheme;
  // Class names
  classNames: ClassNames;
  /** This color is exposed for convenience when working with the theme and cannot be overridden directly. To override the background color, override the `backgroundColor` style in `pageProps.style` when building the theme. */
  _bodyBackgroundColor: string;
  /** This color is exposed for convenience when working with the theme and cannot be overridden directly. To override the page color, override the `color` style in `pageProps.style` when building the theme. */
  _bodyColor: string;
  /** The font size is exposed for convenience when working with the theme and cannot be overridden directly. To customize font sizes, override style props (such as `pageProps.style.fontSize`) when building the theme. */
  _bodyFontSize: number;

  // Button
  buttonProps: ButtonProps;
  // Card
  cardProps: CardProps;
  cardBodyProps: CardBodyProps;
  cardHeaderProps: CardHeaderProps;
  // Horizontal Rule
  hrProps: HorizontalRuleProps;
  // Link
  linkProps: ThemedLinkProps;
  // Lists
  listItemProps: ListItemProps;
  listItemContainerProps: ListItemContainerProps;
  listItemMarkerProps: TextProps;
  unorderedListProps: UnorderedListProps;
  orderedListProps: OrderedListProps;
  // Pages
  pageProps: ThemedPageProps;
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
