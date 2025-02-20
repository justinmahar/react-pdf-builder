import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { sanitizeChildren } from '../children/sanitizeChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedTextProps extends TextProps {
  children?: any;
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  swatch?: SwatchColor;
  /** Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes. */
  className?: string;
}

/**
 * Read the [full documentation for ThemedText](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-themedtext--docs)
 */
export const ThemedText = ({ children, className, style, swatch, ...props }: ThemedTextProps) => {
  const theme = usePDFThemeContext();

  const styleOverride: Style = {};
  if (swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(swatch, theme.colorScheme);
    styleOverride.color = swatchColor;
  }

  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return (
    <Text {...props} style={{ ...styleOverride, ...classNameStyles, ...style }}>
      {sanitizeChildren(children, undefined, true)}
    </Text>
  );
};
