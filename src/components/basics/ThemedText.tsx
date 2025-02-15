import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedTextProps extends TextProps {
  children?: any;
  swatch?: SwatchColor;
  className?: string;
}

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
      <ThemedChildren allowStrings>{children}</ThemedChildren>
    </Text>
  );
};
