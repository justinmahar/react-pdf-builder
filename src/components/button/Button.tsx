import { Link, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Style } from '../Style';
import { Theme } from '../theme/Theme';
import { ThemeBuilder } from '../theme/ThemeBuilder';
import { Themes } from '../theme/themes/Themes';
import { SwatchColor } from '../theme/ColorScheme';

export interface ButtonProps extends ViewProps {
  href?: string;
  swatch?: SwatchColor | 'link';
  children?: any;
  pill?: boolean;
  linkColor?: string;
  theme?: Theme;
}

export const Button = ({ children, theme = Themes.default.build(), style, ...props }: ButtonProps) => {
  const themeProps = theme?.buttonProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const swatch = mergedProps.swatch ?? 'primary';
  const styleOverride: Style = {};
  if (swatch && swatch !== 'link') {
    styleOverride.backgroundColor = ThemeBuilder.getSwatchColor(swatch, theme.colorScheme);
    styleOverride.color = ThemeBuilder.getContrastColor(swatch, theme.colorScheme);
  } else if (swatch === 'link') {
    styleOverride.backgroundColor = '#FFFFFF00';
    styleOverride.color = mergedProps.linkColor ?? ThemeBuilder.getSwatchColor('blue', theme.colorScheme);
  }
  if (mergedProps.pill) {
    styleOverride.borderRadius = '50%';
  }

  const hasHref = typeof mergedProps.href !== 'undefined';
  const child = (
    <PDFSafeChildren textStyle={hasHref ? { textDecoration: 'no-underline' as any } : undefined}>
      {children}
    </PDFSafeChildren>
  );

  const buttonElement = (
    <View {...mergedProps} style={{ ...styleInnate, ...themeProps?.style, ...styleOverride, ...style }}>
      {child}
    </View>
  );

  if (hasHref) {
    return <Link href={mergedProps.href}>{buttonElement}</Link>;
  } else {
    return buttonElement;
  }
};
