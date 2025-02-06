import { Link, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Style } from '../Style';
import { Theme } from '../theme/Theme';
import { ThemeBuilder } from '../theme/ThemeBuilder';
import { Themes } from '../theme/themes/Themes';
import { SwatchColor } from '../theme/themes/ColorScheme';

export interface ButtonProps extends ViewProps {
  href?: string;
  swatch?: SwatchColor;
  children?: any;
  pill?: boolean;
  theme?: Theme;
}

export const Button = ({ children, theme = Themes.default.build(), style, ...props }: ButtonProps) => {
  const mergedProps = {
    ...theme?.buttonProps,
    ...props,
  };

  const styleInnate: Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const swatch = (mergedProps.swatch as SwatchColor | undefined) ?? 'primary';
  const styleOverride: Style = {};
  if (swatch) {
    styleOverride.backgroundColor = ThemeBuilder.getSwatchColor(swatch, theme.colorScheme);
    styleOverride.color = ThemeBuilder.getContrastColor(swatch, theme.colorScheme);
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
    <View {...mergedProps} style={{ ...styleInnate, ...mergedProps.style, ...styleOverride, ...style }}>
      {child}
    </View>
  );

  if (hasHref) {
    return <Link href={mergedProps.href}>{buttonElement}</Link>;
  } else {
    return buttonElement;
  }
};
