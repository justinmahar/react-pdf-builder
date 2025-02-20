import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { ThemedText } from '../basics/ThemedText';
import { sanitizeChildren } from '../children/sanitizeChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';
import { HeadingProps } from './Heading';

/**
 * Read the [full documentation for Heading3](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-typography-heading3--docs)
 */
export const Heading3 = ({ children, className, style, ...props }: HeadingProps) => {
  const theme = usePDFThemeContext();
  const mergedProps = {
    ...theme?.headingProps,
    ...theme?.heading3Props,
    ...props,
  };

  const mergedThemeStyles = {
    ...theme?.headingProps?.style,
    ...theme?.heading3Props?.style,
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

  const themeClassName = `${theme?.headingProps.className ?? ''} ${theme?.heading3Props.className ?? ''}`.trim();
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <ThemedText
      {...mergedProps}
      style={{ ...themeClassNameStyles, ...mergedThemeStyles, ...styleOverride, ...classNameStyles, ...style }}
    >
      {sanitizeChildren(children, undefined, true)}
    </ThemedText>
  );
};
