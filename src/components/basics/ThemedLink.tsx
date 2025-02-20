import { Link, LinkProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { sanitizeChildren } from '../children/sanitizeChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedLinkProps extends LinkProps {
  children?: any;
  /** Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes. */
  className?: string;
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  swatch?: SwatchColor;
}

/**
 * Read the [full documentation for ThemedLink](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-themedlink--docs)
 */
export const ThemedLink = ({ children, className, style, ...props }: ThemedLinkProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme?.linkProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {
    color: theme.colorScheme?.colors.blue,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    styleOverride.color = swatchColor;
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Link
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
      {sanitizeChildren(children)}
    </Link>
  );
};
