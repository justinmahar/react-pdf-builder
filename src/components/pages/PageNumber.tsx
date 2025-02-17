import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { ThemedText, ThemedTextProps } from '../basics/ThemedText';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface PageNumberProps extends ThemedTextProps {
  /** Optional. Customize how the page number string is displayed with a template string containing `%n` for the current page number, `%t` for the total number of pages, `%sn` for the sub page number, or `%st` for the sub pages total. Default format is `"%n / %t"`. */
  format?: string;
}

/**
 * Read the [docs](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-pagenumber--docs)
 */
export const PageNumber = ({ className, style, ...props }: PageNumberProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme.pageNumberProps;
  const mergedProps = { ...themeProps, ...props };
  const defaultFormat = '%n / %t';

  const styleInnate: Style = {
    marginBottom: 0,
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
      render={({ pageNumber, totalPages, subPageNumber, subPageTotalPages }) => {
        const num = pageNumber;
        return (mergedProps.format ?? defaultFormat)
          .split('%n')
          .join(`${num}`)
          .split('%t')
          .join(`${totalPages}`)
          .split('%sn')
          .join(`${subPageNumber}`)
          .split('%st')
          .join(`${subPageTotalPages}`);
      }}
      {...mergedProps}
      style={{
        ...styleInnate,
        ...themeClassNameStyles,
        ...themeProps?.style,
        ...styleOverride,
        ...classNameStyles,
        ...style,
      }}
    />
  );
};
