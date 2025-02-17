import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Div, DivProps } from '../basics/Div';
import { ThemedLink } from '../basics/ThemedLink';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ButtonProps extends DivProps {
  /** Optional. When provided, Button becomes a clickable link. */
  href?: string;
  /** Optional. When `true`, corners will be round. */
  pill?: boolean;
  /** Optional. Color for the button text when the `link` swatch is used. */
  linkColor?: string;
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string, or the special `'link'` swatch. */
  swatch?: SwatchColor | 'link';
}

/**
 * Read the [docs](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-button--docs)
 */
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
