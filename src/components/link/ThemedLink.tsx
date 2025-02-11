import { Link, LinkProps, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { SwatchColor } from '../theme/ColorScheme';
import { Style } from '../Style';
import { ThemeBuilder } from '../theme/ThemeBuilder';

export interface ThemedLinkProps extends LinkProps {
  children?: any;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const ThemedLink = ({ children, theme = Themes.default.build(), style, ...props }: ThemedLinkProps) => {
  const themeProps = theme?.linkProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {
    color: theme.colorScheme?.colors.blue,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    styleOverride.color = swatchColor;
  }

  return (
    <Link {...mergedProps} style={{ ...styleInnate, ...themeProps?.style, ...styleOverride, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Link>
  );
};
