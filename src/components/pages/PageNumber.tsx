import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { ThemedText, ThemedTextProps } from '../basics/ThemedText';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface PageNumberProps extends ThemedTextProps {
  format?: string;
}

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
