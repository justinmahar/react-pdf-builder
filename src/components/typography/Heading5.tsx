import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { ThemedText } from '../basics/ThemedText';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';
import { HeadingProps } from './Heading';

export const Heading5 = ({ children, className, style, ...props }: HeadingProps) => {
  const theme = usePDFThemeContext();
  const mergedProps = {
    ...theme?.headingProps,
    ...theme?.heading5Props,
    ...props,
  };

  const mergedThemeStyles = {
    ...theme?.headingProps?.style,
    ...theme?.heading5Props?.style,
  };

  const styleOverride: Style = {};
  if (!mergedProps.rule) {
    styleOverride.borderBottom = 0;
  }
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    styleOverride.color = swatchColor;
    styleOverride.borderColor = swatchColor;
  }

  const themeClassName = `${theme?.headingProps.className ?? ''} ${theme?.heading5Props.className ?? ''}`.trim();
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <ThemedText
      {...mergedProps}
      style={{ ...themeClassNameStyles, ...mergedThemeStyles, ...styleOverride, ...classNameStyles, ...style }}
    >
      <ThemedChildren allowStrings>{children}</ThemedChildren>
    </ThemedText>
  );
};
