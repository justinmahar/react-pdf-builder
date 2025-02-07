import React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Style } from '../Style';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { SwatchColor } from '../theme/themes/ColorScheme';
import { ThemeBuilder } from '../theme/ThemeBuilder';
import Color from 'color';

export interface CardBodyProps extends BoxProps {
  children?: any;
  withHeader?: boolean;
  withFooter?: boolean;
  swatch?: SwatchColor;
  swatchOpacity?: number;
  theme?: Theme;
}

export const CardBody = ({ children, theme = Themes.default.build(), style, ...props }: CardBodyProps) => {
  const themeProps = theme.cardBodyProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  const styleOverride: Style = {};
  if (mergedProps.withHeader) {
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

  return (
    <Box {...mergedProps} style={{ ...styleInnate, ...themeProps?.style, ...styleOverride, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Box>
  );
};
