import { Link, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Style } from '../Style';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';
import { SwatchColor } from '../../themes/ColorScheme';

export interface ButtonProps extends ViewProps {
  children?: any;
  className?: string;
  href?: string;
  swatch?: SwatchColor | 'link';
  pill?: boolean;
  linkColor?: string;
  theme?: Theme;
}

export const Button = ({ children, theme = Themes.default.build(), className, style, ...props }: ButtonProps) => {
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

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  const buttonElement = (
    <View
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
      {child}
    </View>
  );

  if (hasHref) {
    return <Link href={mergedProps.href}>{buttonElement}</Link>;
  } else {
    return buttonElement;
  }
};
