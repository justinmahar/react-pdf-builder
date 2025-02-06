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
import { ColorScheme } from './themes/ColorScheme';
import { DeepPartial } from '../util';

export interface Theme {
  // Color scheme
  colorScheme?: ColorScheme;

  // Button
  buttonProps?: ButtonProps;
  // Card
  cardProps?: CardProps;
  cardBodyProps?: CardBodyProps;
  cardHeaderProps?: CardHeaderProps;
  // Lists
  listItemProps?: ListItemProps;
  listItemContainerProps?: ListItemContainerProps;
  listItemMarkerProps?: TextProps;
  unorderedListProps?: UnorderedListProps;
  orderedListProps?: OrderedListProps;
  // Pages
  pageProps?: PageProps;
  pageNumberProps?: PageNumberProps;
  // Table
  tableProps?: TableProps;
  tableCellProps?: TableCellProps;
  tableRowProps?: TableRowProps;
  // Typography
  headingProps?: HeadingProps;
  heading1Props?: HeadingProps;
  heading2Props?: HeadingProps;
  heading3Props?: HeadingProps;
  heading4Props?: HeadingProps;
  heading5Props?: HeadingProps;
  heading6Props?: HeadingProps;
  paragraphProps?: ParagraphProps;
}

export type PartialTheme = DeepPartial<Theme>;
