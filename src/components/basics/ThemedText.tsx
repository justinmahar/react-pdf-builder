import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';
import { ThemedChildren } from '../children/ThemedChildren';
import { SwatchColor } from '../../themes/ColorScheme';
import { Style } from '../Style';

export interface ThemedTextProps extends TextProps {
  children?: any;
  swatch?: SwatchColor;
  className?: string;
  theme?: Theme;
}

export const ThemedText = ({ children, theme, className, style, swatch, ...props }: ThemedTextProps) => {
  theme = theme ?? Themes.default.build();

  const styleOverride: Style = {};
  if (swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(swatch, theme.colorScheme);
    styleOverride.color = swatchColor;
  }

  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return (
    <Text {...props} style={{ ...styleOverride, ...classNameStyles, ...style }}>
      <ThemedChildren theme={theme} allowStrings>
        {children}
      </ThemedChildren>
    </Text>
  );
};
