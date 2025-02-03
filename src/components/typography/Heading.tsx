import { TextProps } from '@react-pdf/renderer';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface HeadingProps extends TextProps {
  children?: any;
  rule?: boolean;
  theme?: Theme;
}
