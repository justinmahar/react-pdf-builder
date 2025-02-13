import { Link, LinkProps, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { ThemedChildren } from '../children/ThemedChildren';
import { SwatchColor } from '../../themes/ColorScheme';
import { Style } from '../Style';
import { ThemeBuilder } from '../../themes/ThemeBuilder';

export interface ThemedLinkProps extends LinkProps {
  children?: any;
  className?: string;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const ThemedLink = ({ children, theme, className, style, ...props }: ThemedLinkProps) => {
  theme = theme ?? Themes.default.build();
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

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Link
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
    </Link>
  );
};
