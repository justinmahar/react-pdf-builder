import Color from 'color';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { sanitizeChildren } from '../children/sanitizeChildren';
import { Box, BoxProps } from '../layout/Box';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface TableProps extends BoxProps {
  /** Optional. When `true`, odd rows of table will be striped. */
  striped?: boolean;
  /** Optional. Styles used for the striped rows. */
  stripeStyle?: Style;
  /** Optional. When `true`, even rows of table will be striped. */
  inverseStriped?: boolean;
  /** Optional. Opacity of the background for striped rows with a swatch. */
  stripeOpacity?: number;
  /** Optional. Styles used for each row. Use this to customize the table further. */
  rowStyle?: Style;
  /** Optional. Styles used for each cell. Use this to customize the table further. */
  cellStyle?: Style;
  /** Optional. When `true`, all rows and cells will have a border on all edges. */
  bordered?: boolean;
  /** Optional. When `true`, the outside edges of the table will have a border. */
  borderedOutside?: boolean;
  /** Optional. When `true`, borders will be used on edges inside the table and not facing the outside. */
  borderedInside?: boolean;
  /** Optional. When `true`, vertical edges will have borders. */
  borderedVertical?: boolean;
  /** Optional. When `true`, horizontal edges will have borders. */
  borderedHorizontal?: boolean;
  /** Optional. Specify the color for the borders. */
  borderColor?: string;
  /** Optional. Specify the border style. Default `solid`. */
  borderStyle?: 'dashed' | 'dotted' | 'solid';
  /** Optional. Specify the width for the borders. */
  borderWidth?: string | number;
  /** Optional. Specify widths for the columns in the table. By default, all columns will be divided evenly. */
  colWidths?: (string | number)[];
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  swatch?: SwatchColor;
}

/**
 * Read the [full documentation for Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs)
 */
export const Table = ({ children, className, style, ...props }: TableProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme?.tableProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    mergedProps.borderColor = props.borderColor ?? swatchColor;
    const stripeOpacity = mergedProps.stripeOpacity ?? 0.133;
    const stripeOpacityHex = ThemeBuilder.decimalToHex(stripeOpacity);
    mergedProps.stripeStyle = props.stripeStyle ?? {
      backgroundColor: `${new Color(swatchColor ?? '#888').hex()}${stripeOpacityHex}`, // Add opacity to the end
    };
  }

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  const styleOverride: Style = {};
  if (mergedProps.bordered || mergedProps.borderedOutside || mergedProps.borderedHorizontal) {
    styleOverride.borderTop = mergedProps.borderWidth;
    styleOverride.borderBottom = mergedProps.borderWidth;
    styleOverride.borderColor = mergedProps.borderColor;
    styleOverride.borderStyle = mergedProps.borderStyle;
  }

  // Inject rows with props from Table, as well as the row index and count
  const themedChildren = sanitizeChildren(children);
  const themedChildrenArray = Array.isArray(themedChildren) ? themedChildren : [themedChildren];
  const injectedChildArray = themedChildrenArray.map((c, i, arr) => {
    return React.cloneElement(c, {
      key: `row-` + i,
      striped: mergedProps.striped,
      stripeStyle: mergedProps.stripeStyle,
      inverseStriped: mergedProps.inverseStriped,
      stripeOpacity: mergedProps.stripeOpacity,
      rowStyle: mergedProps.rowStyle,
      cellStyle: mergedProps.cellStyle,
      bordered: mergedProps.bordered,
      borderedOutside: mergedProps.borderedOutside,
      borderedInside: mergedProps.borderedInside,
      borderedVertical: mergedProps.borderedVertical,
      borderedHorizontal: mergedProps.borderedHorizontal,
      borderColor: mergedProps.borderColor,
      borderStyle: mergedProps.borderStyle,
      borderWidth: mergedProps.borderWidth,
      colWidths: mergedProps.colWidths,
      ...c.props,
      rowIndex: i,
      rowCount: arr.length,
    });
  });

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
        ...classNameStyles,
        ...style,
      }}
    >
      {injectedChildArray}
    </Box>
  );
};
