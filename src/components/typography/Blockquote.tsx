import { ViewProps } from '@react-pdf/renderer';
import Color from 'color';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';
import { Div } from '../basics/ThemedView';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';

export interface BlockquoteProps extends ViewProps {
  children?: any;
  className?: string;
  swatch?: SwatchColor;
  swatchOpacity?: number;
  theme?: Theme;
}

export const Blockquote = ({ children, theme, className, style, ...props }: BlockquoteProps) => {
  theme = theme ?? Themes.default.build();
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
      theme={theme}
      {...mergedProps}
      style={{ ...themeClassNameStyles, ...mergedProps?.style, ...styleOverride, ...classNameStyles, ...style }}
    >
      <ThemedChildren theme={theme}>{children}</ThemedChildren>
    </Div>
  );
};
