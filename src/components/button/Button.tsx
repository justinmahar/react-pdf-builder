import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { ThemedLink } from '../basics/ThemedLink';
import { Div } from '../basics/Div';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ButtonProps extends ViewProps {
  children?: any;
  className?: string;
  href?: string;
  swatch?: SwatchColor | 'link';
  pill?: boolean;
  linkColor?: string;
}

export const Button = ({ children, className, style, ...props }: ButtonProps) => {
  const theme = usePDFThemeContext();
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
  const themedChildren = (
    <ThemedChildren textStyle={hasHref ? { textDecoration: 'no-underline' as any } : undefined}>
      {children}
    </ThemedChildren>
  );

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  const buttonElement = (
    <Div
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
      {themedChildren}
    </Div>
  );

  if (hasHref) {
    return <ThemedLink href={mergedProps.href}>{buttonElement}</ThemedLink>;
  } else {
    return buttonElement;
  }
};
