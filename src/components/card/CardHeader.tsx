import Color from 'color';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Box, BoxProps } from '../layout/Box';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';
import { Heading5 } from '../typography/Heading5';

export interface CardHeaderProps extends BoxProps {
  /** Optional. A custom component used to wrap the text. Defaults to [Heading5](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-typography-heading5--docs) with no bottom margin. */
  as?: any;
  /** Optional. Set to `true` when there is no body below the header. */
  noBody?: boolean;
  /** Optional. Set to `true` when there is another header above this header. */
  withHeader?: boolean;
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  swatch?: SwatchColor;
  /** Optional. Opacity value for the swatch color, from `0` to `1`. */
  swatchOpacity?: number;
}

/**
 * Read the [full documentation for CardHeader](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-cards-cardheader--docs)
 */
export const CardHeader = ({ children, className, style, ...props }: CardHeaderProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme.cardHeaderProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const AsComponent = mergedProps.as ?? Heading5;
  let child = children;
  if (typeof child === 'string') {
    child = <AsComponent className="mb-0">{child}</AsComponent>;
  }

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  const styleOverride: Style = {};
  if (!mergedProps.noBody) {
    styleOverride.borderBottomLeftRadius = 0;
    styleOverride.borderBottomRightRadius = 0;
  }
  if (mergedProps.withHeader) {
    styleOverride.borderTopLeftRadius = 0;
    styleOverride.borderTopRightRadius = 0;
  }
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    const contrastColor = ThemeBuilder.getContrastColor(mergedProps.swatch, theme.colorScheme);
    styleOverride.color = contrastColor;
    styleOverride.borderColor = swatchColor;
    const swatchOpacity = mergedProps.swatchOpacity ?? 1;
    const swatchOpacityHex = ThemeBuilder.decimalToHex(swatchOpacity);
    styleOverride.backgroundColor = `${new Color(swatchColor ?? '#888').hex()}${swatchOpacityHex}`; // Add opacity to the end
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Box
      wrap={false}
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
      {child}
    </Box>
  );
};
