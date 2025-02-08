import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { SwatchColor } from '../theme/themes/ColorScheme';
import { Style } from '../Style';
import { ThemeBuilder } from '../theme/ThemeBuilder';
import Color from 'color';

export interface BlockquoteProps extends ViewProps {
  children?: any;
  swatch?: SwatchColor;
  swatchOpacity?: number;
  theme?: Theme;
}

export const Blockquote = ({ children, theme = Themes.default.build(), style, ...props }: BlockquoteProps) => {
  const mergedProps = {
    ...theme?.blockquoteProps,
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

  return (
    <View {...mergedProps} style={{ ...mergedProps?.style, ...styleOverride, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
