import { TextProps } from '@react-pdf/renderer';
import { Theme } from '../theme/Theme';
import { SwatchColor } from '../theme/ColorScheme';

export interface HeadingProps extends TextProps {
  children?: any;
  rule?: boolean;
  swatch?: SwatchColor;
  theme?: Theme;
}
