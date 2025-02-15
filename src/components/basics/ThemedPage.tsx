import { Page, PageProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedPageProps extends PageProps {
  children?: any;
  className?: string;
  swatch?: SwatchColor;
}

export const ThemedPage = ({ children, className, style, ...props }: ThemedPageProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme.pageProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    styleOverride.backgroundColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Page
      {...mergedProps}
      style={{ ...themeClassNameStyles, ...themeProps?.style, ...styleOverride, ...classNameStyles, ...style }}
    >
      <ThemedChildren>{children}</ThemedChildren>
    </Page>
  );
};
