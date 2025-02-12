import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { SwatchColor } from '../../themes/ColorScheme';
import { Style } from '../Style';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import Color from 'color';

export interface BlockquoteProps extends ViewProps {
  children?: any;
  className?: string;
  swatch?: SwatchColor;
  swatchOpacity?: number;
  theme?: Theme;
}

export const Blockquote = ({
  children,
  theme = Themes.default.build(),
  className,
  style,
  ...props
}: BlockquoteProps) => {
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
    <View
      {...mergedProps}
      style={{ ...themeClassNameStyles, ...mergedProps?.style, ...styleOverride, ...classNameStyles, ...style }}
    >
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
