import { PageProps } from '@react-pdf/renderer';
import { CardProps } from '../card/Card';
import { CardBodyProps } from '../card/CardBody';
import { CardHeaderProps } from '../card/CardHeader';

export interface Theme {
  cardProps?: CardProps;
  cardBodyProps?: CardBodyProps;
  cardHeaderProps?: CardHeaderProps;
  pageProps?: PageProps;
}
