import { TextProps } from '@react-pdf/renderer';
import { Theme } from '../../themes/Theme';
import { SwatchColor } from '../../themes/ColorScheme';

export interface HeadingProps extends TextProps {
  children?: any;
  rule?: boolean;
  swatch?: SwatchColor;
  theme?: Theme;
}
