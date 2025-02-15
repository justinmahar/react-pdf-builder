import Color from 'color';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Div, DivProps } from '../basics/ThemedView';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface BlockquoteProps extends DivProps {
  swatch?: SwatchColor;
  swatchOpacity?: number;
}

export const Blockquote = ({ children, className, style, ...props }: BlockquoteProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme?.blockquoteProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    // styleOverride.color = swatchColor;
    styleOverride.borderColor = swatchColor;
    const swatchOpacity = mergedProps.swatchOpacity ?? 0.134;
    const swatchOpacityHex = ThemeBuilder.decimalToHex(swatchOpacity);
    styleOverride.backgroundColor = `${new Color(swatchColor ?? '#888').hex()}${swatchOpacityHex}`; // Add opacity to the end
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Div
      {...mergedProps}
      style={{ ...themeClassNameStyles, ...mergedProps?.style, ...styleOverride, ...classNameStyles, ...style }}
    >
      <ThemedChildren>{children}</ThemedChildren>
    </Div>
  );
};
