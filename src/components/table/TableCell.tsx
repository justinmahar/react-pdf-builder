import Color from 'color';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { ThemedChildren } from '../children/ThemedChildren';
import { Box, BoxProps } from '../layout/Box';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface TableCellProps extends BoxProps {
  /** Automatically set by parent [TableRow](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablerow--docs). */
  colIndex?: number;
  /** Automatically set by parent [TableRow](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablerow--docs). */
  colCount?: number;
  /** Automatically set by parent [TableRow](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablerow--docs). */
  colWidths?: (string | number)[];
  /** Automatically set by parent [TableRow](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablerow--docs). */
  cellStyle?: Style;
  /** Automatically set by parent [TableRow](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablerow--docs). */
  bordered?: boolean;
  /** Automatically set by parent [TableRow](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablerow--docs). */
  borderedInside?: boolean;
  /** Automatically set by parent [TableRow](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablerow--docs). */
  borderedVertical?: boolean;
  /** Automatically set by parent [TableRow](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablerow--docs). */
  borderColor?: string;
  /** Automatically set by parent [TableRow](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablerow--docs). */
  borderWidth?: string | number;
  /** Automatically set by parent [TableRow](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablerow--docs). */
  borderStyle?: 'dashed' | 'dotted' | 'solid';
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  swatch?: SwatchColor;
  /** Optional. Opacity value for the swatch color, from `0` to `1`. */
  swatchOpacity?: number;
}

/**
 * Read the [full documentation for TableCell](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablecell--docs)
 */
export const TableCell = ({ children, className, style, ...props }: TableCellProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme.tableCellProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const lastCol = props.colIndex === (props.colCount ?? 0) - 1;

  // Use the defined width, or calculate a percentage if none was provided.
  const colWidth =
    mergedProps.colWidths && typeof props.colIndex !== 'undefined'
      ? mergedProps.colWidths[props.colIndex]
      : `${Math.round(100 / (props.colCount ?? 1))}%`;

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  const styleOverride: Style = {
    width: colWidth,
  };
  if (!lastCol && (mergedProps.bordered || mergedProps.borderedInside || mergedProps.borderedVertical)) {
    styleOverride.borderRight = mergedProps.borderWidth;
    styleOverride.borderColor = mergedProps.borderColor;
    styleOverride.borderStyle = mergedProps.borderStyle;
  }
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    const swatchOpacity = mergedProps.swatchOpacity ?? 0.134;
    const swatchOpacityHex = ThemeBuilder.decimalToHex(swatchOpacity);
    styleOverride.backgroundColor = `${new Color(swatchColor ?? '#888').hex()}${swatchOpacityHex}`; // Add opacity to the end
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Box
      dir="y"
      {...mergedProps}
      style={{
        ...styleInnate,
        ...themeClassNameStyles,
        ...themeProps?.style,
        ...styleOverride,
        ...mergedProps.cellStyle,
        ...classNameStyles,
        ...style,
      }}
    >
      <ThemedChildren>{children}</ThemedChildren>
    </Box>
  );
};
