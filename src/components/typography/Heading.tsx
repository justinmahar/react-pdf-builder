import { TextProps } from '@react-pdf/renderer';
import { Theme } from '../theme/Theme';

export interface HeadingProps extends TextProps {
  children?: any;
  rule?: boolean;
  theme?: Theme;
}
