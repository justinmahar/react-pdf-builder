import React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { Style } from '../Style';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { Heading5 } from '../typography/Heading5';
import { SwatchColor } from '../theme/ColorScheme';
import { ThemeBuilder } from '../theme/ThemeBuilder';
import Color from 'color';

export interface CardHeaderProps extends BoxProps {
  children?: any;
  as?: any;
  noBody?: boolean;
  swatch?: SwatchColor;
  swatchOpacity?: number;
  theme?: Theme;
}

export const CardHeader = ({ children, theme = Themes.default.build(), style, ...props }: CardHeaderProps) => {
  const themeProps = theme?.cardHeaderProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const AsComponent = mergedProps.as ?? Heading5;
  let child = children;
  if (typeof child === 'string') {
    child = (
      <AsComponent theme={theme} style={{ marginBottom: 0 }}>
        {child}
      </AsComponent>
    );
  }

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  const styleOverride: Style = {};
  if (!mergedProps.noBody) {
    styleOverride.borderBottomLeftRadius = 0;
    styleOverride.borderBottomRightRadius = 0;
  }
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    const contrastColor = ThemeBuilder.getContrastColor(mergedProps.swatch, theme.colorScheme);
    styleOverride.color = contrastColor;
    styleOverride.borderColor = swatchColor;
    const swatchOpacity = mergedProps.swatchOpacity ?? 1;
    const swatchOpacityHex = ThemeBuilder.decimalToHex(swatchOpacity);
    styleOverride.backgroundColor = `${new Color(swatchColor ?? '#888').hex()}${swatchOpacityHex}`; // Add opacity to the end
  }

  return (
    <Box wrap={false} {...mergedProps} style={{ ...styleInnate, ...themeProps?.style, ...styleOverride, ...style }}>
      {child}
    </Box>
  );
};
