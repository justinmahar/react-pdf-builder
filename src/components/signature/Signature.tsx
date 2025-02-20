import { TextProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { ThemedText } from '../basics/ThemedText';
import { sanitizeChildren } from '../children/sanitizeChildren';
import { Box, BoxProps } from '../layout/Box';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface SignatureProps extends BoxProps {
  /** Optional. Width of the line in points. */
  lineSize?: number;
  /** Optional. When `true`, an `X` is shown above the line indicating where to sign. */
  x?: boolean;
  /** Optional. Props for the `X` shown above the line. */
  xProps?: TextProps;
  /** Optional. String value of the `X` shown above the line. Defaults to `"X"`. */
  xValue?: string;
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  swatch?: SwatchColor;
}

/**
 * Read the [full documentation for Signature](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-signature--docs)
 */
export const Signature = ({ children, className, style, ...props }: SignatureProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme?.signatureProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {
    alignItems: 'flex-end',
  };

  const styleOverride: Style = {};
  const xStyleOverride: Style = {};
  if (typeof mergedProps.lineSize !== 'undefined') {
    styleOverride.borderBottom = mergedProps.lineSize;
  }
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    styleOverride.borderColor = swatchColor;
    styleOverride.color = swatchColor;
    xStyleOverride.color = swatchColor;
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Box
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
      {mergedProps.x && (
        <ThemedText {...mergedProps.xProps} style={{ ...mergedProps.xProps?.style, ...xStyleOverride }}>
          {mergedProps.xValue ?? 'X'}
        </ThemedText>
      )}
      {sanitizeChildren(children)}
    </Box>
  );
};
