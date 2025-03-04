import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { ThemedText, ThemedTextProps } from '../basics/ThemedText';
import { sanitizeChildren } from '../children/sanitizeChildren';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ParagraphProps extends ThemedTextProps {}

/**
 * Read the [full documentation for Paragraph](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-typography-paragraph--docs)
 */
export const Paragraph = ({ children, className, style, ...props }: ParagraphProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme?.paragraphProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    styleOverride.color = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <ThemedText
      {...mergedProps}
      style={{ ...themeClassNameStyles, ...themeProps?.style, ...styleOverride, ...classNameStyles, ...style }}
    >
      {sanitizeChildren(children, undefined, true)}
    </ThemedText>
  );
};
