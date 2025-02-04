import { Link, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { Style } from '../Style';

export interface ButtonProps extends ViewProps {
  href?: string;
  variant?: string;
  children?: any;
  pill?: boolean;
  theme?: Theme;
}

export const Button = ({ children, theme = Themes.default.create(), style, ...props }: ButtonProps) => {
  const mergedProps = {
    ...theme?.buttonProps,
    ...props,
  };

  const styleOverride: Style = {};
  if (mergedProps.variant) {
    styleOverride.backgroundColor = defaultVariantBackgrounds[mergedProps.variant];
    styleOverride.color = defaultVariantForegrounds[mergedProps.variant];
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
    <View {...mergedProps} style={{ ...mergedProps.style, ...styleOverride, ...style }}>
      {child}
    </View>
  );

  if (hasHref) {
    return <Link href={mergedProps.href}>{buttonElement}</Link>;
  } else {
    return buttonElement;
  }
};

const defaultVariantBackgrounds: Record<string, string> = {
  primary: '#007BFF',
  secondary: '#6C757D',
  success: '#28A745',
  danger: '#DC3445',
  warning: '#FFC106',
  info: '#19A1B8',
  light: '#F8F9FA',
  dark: '#343A41',
  link: 'transparent',
};

const defaultVariantForegrounds: Record<string, string> = {
  primary: 'white',
  secondary: 'white',
  success: 'white',
  danger: 'white',
  warning: 'black',
  info: 'white',
  light: 'black',
  dark: 'white',
  link: '#007BFF',
};
