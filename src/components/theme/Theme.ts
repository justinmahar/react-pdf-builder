import { PageProps } from '@react-pdf/renderer';
import { CardProps } from '../card/Card';
import { CardBodyProps } from '../card/CardBody';
import { CardHeaderProps } from '../card/CardHeader';
import { HeadingProps } from '../typography/Heading';
import { ParagraphProps } from '../typography/Paragraph';

export interface Theme {
  heading1Props?: HeadingProps;
  heading2Props?: HeadingProps;
  heading3Props?: HeadingProps;
  heading4Props?: HeadingProps;
  heading5Props?: HeadingProps;
  heading6Props?: HeadingProps;
  paragraphProps?: ParagraphProps;
  pageProps?: PageProps;
  cardProps?: CardProps;
  cardBodyProps?: CardBodyProps;
  cardHeaderProps?: CardHeaderProps;
}
