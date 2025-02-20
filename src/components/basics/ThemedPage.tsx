import { Page, PageProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { sanitizeChildren } from '../children/sanitizeChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedPageProps extends PageProps {
  children?: any;
  /** Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes. */
  className?: string;
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  swatch?: SwatchColor;
}

/**
 * Read the [full documentation for ThemedPage](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-themedpage--docs)
 */
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
      {sanitizeChildren(children)}
    </Page>
  );
};
