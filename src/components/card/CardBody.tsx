import React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import Color from 'color';

export interface CardBodyProps extends BoxProps {
  children?: any;
  className?: string;
  noHeader?: boolean;
  withFooter?: boolean;
  swatch?: SwatchColor;
  swatchOpacity?: number;
  theme?: Theme;
}

export const CardBody = ({ children, theme, className, style, ...props }: CardBodyProps) => {
  theme = theme ?? Themes.default.build();
  const themeProps = theme.cardBodyProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  const styleOverride: Style = {};
  if (!mergedProps.noHeader) {
    styleOverride.borderTopLeftRadius = 0;
    styleOverride.borderTopRightRadius = 0;
  }
  if (mergedProps.withFooter) {
    styleOverride.borderBottomLeftRadius = 0;
    styleOverride.borderBottomRightRadius = 0;
  }
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
    <Box
      dir="y"
      theme={theme}
      {...mergedProps}
      style={{
        ...styleInnate,
        ...themeClassNameStyles,
        ...themeProps?.style,
        ...styleOverride,
        ...classNameStyles,
        ...style,
      }}
    >
      <ThemedChildren theme={theme}>{children}</ThemedChildren>
    </Box>
  );
};
