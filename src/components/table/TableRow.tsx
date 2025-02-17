import Color from 'color';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { getThemedChildren, ThemedChildren } from '../children/ThemedChildren';
import { Box, BoxProps } from '../layout/Box';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface TableRowProps extends BoxProps {
  /** Optional. This is automatically set by the parent [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs). */
  rowIndex?: number;
  /** Optional. This is automatically set by the parent [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs). */
  rowCount?: number;
  /** Optional. When `true`, this row of the table will be striped when odd. Set to `false` to disable odd row striping for this row. */
  striped?: boolean;
  /** Optional. Styles used for the striped rows. */
  stripeStyle?: Style;
  /** Optional. When `true`, this row of the table will be striped when even. Set to `false` to disable even row striping for this row. */
  inverseStriped?: boolean;
  /** Optional. Opacity of the background for striped rows with a swatch. */
  stripeOpacity?: number;
  /** Optional. This is automatically set by the parent [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs). */
  rowStyle?: Style;
  /** Optional. Styles used for the cells in this row. Use this to customize the row further. */
  cellStyle?: Style;
  /** Optional. This is automatically set by the parent [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs). When `true`, all rows and cells will have a border on all edges. */
  bordered?: boolean;
  /** Optional. This is automatically set by the parent [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs). When `true`, the outside edges of the table will have a border. */
  borderedOutside?: boolean;
  /** Optional. This is automatically set by the parent [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs). When `true`, borders will be used on edges inside the table and not facing the outside. */
  borderedInside?: boolean;
  /** Optional. This is automatically set by the parent [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs). When `true`, vertical edges will have borders. */
  borderedVertical?: boolean;
  /** Optional. This is automatically set by the parent [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs). When `true`, horizontal edges will have borders. */
  borderedHorizontal?: boolean;
  /** Optional. This is automatically set by the parent [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs). Specify the color for the borders. */
  borderColor?: string;
  /** Optional. This is automatically set by the parent [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs). Specify the border style. Default `solid`. */
  borderStyle?: 'dashed' | 'dotted' | 'solid';
  /** Optional. This is automatically set by the parent [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs). Specify the width for the borders. */
  borderWidth?: string | number;
  /** Optional. Used to customize the column widths for this row. This can be used to create colspans for rows with less columns. By default, all columns will be divided evenly. */
  colWidths?: (string | number)[];
  /** Optional. Opacity value for the swatch color, from `0` to `1`. */
  swatchOpacity?: number;
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  swatch?: SwatchColor;
}

/**
 * Read the [docs](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-tablerow--docs)
 */
export const TableRow = ({ children, stripeStyle, className, style, ...props }: TableRowProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme.tableRowProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  let bgColorOverride: string | undefined = undefined;
  let contrastColorOverride: string | undefined = undefined;
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    bgColorOverride = swatchColor;
    contrastColorOverride = ThemeBuilder.getContrastColor(mergedProps.swatch, theme.colorScheme);
    mergedProps.borderColor = swatchColor;

    const swatchOpacity = mergedProps.swatchOpacity ?? 0.934;
    const swatchOpacityHex = ThemeBuilder.decimalToHex(swatchOpacity);
    bgColorOverride = `${new Color(swatchColor ?? '#888').hex()}${swatchOpacityHex}`;
    const stripeOpacity = mergedProps.stripeOpacity ?? 0.134;
    const stripeOpacityHex = ThemeBuilder.decimalToHex(stripeOpacity);
    mergedProps.stripeStyle = {
      backgroundColor: `${new Color(swatchColor ?? '#888').hex()}${stripeOpacityHex}`, // Add opacity to the end
    };
  }

  const firstRow = props.rowIndex === 0;
  const isRowEven = !((props.rowIndex ?? 0) % 2);
  const isStripedRow =
    !mergedProps.swatch && ((mergedProps.striped && !isRowEven) || (mergedProps.inverseStriped && isRowEven));

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  const styleOverride: Style = {};
  if (typeof bgColorOverride !== 'undefined') {
    styleOverride.backgroundColor = bgColorOverride;
  }
  if (typeof contrastColorOverride !== 'undefined') {
    styleOverride.color = contrastColorOverride;
  }

  let borderAdded = false;
  if (
    (mergedProps.bordered && !firstRow) ||
    (mergedProps.borderedInside && !firstRow) ||
    (mergedProps.borderedHorizontal && !firstRow)
  ) {
    styleOverride.borderTop = mergedProps.borderWidth;
    borderAdded = true;
  }
  if (mergedProps.bordered || mergedProps.borderedOutside || mergedProps.borderedVertical) {
    styleOverride.borderRight = mergedProps.borderWidth;
    styleOverride.borderLeft = mergedProps.borderWidth;
    borderAdded = true;
  }
  if (borderAdded) {
    styleOverride.borderColor = mergedProps.borderColor;
    styleOverride.borderStyle = mergedProps.borderStyle;
  }

  let stripedStyleOverride: Style = {};
  if (isStripedRow) {
    stripedStyleOverride = { ...mergedProps.stripeStyle, ...stripeStyle };
  }

  // Inject cells with props from Table, as well as the col index and count
  const themedChildren = getThemedChildren(children);
  const injectedChildArray = themedChildren.map((c, i, arr) => {
    return React.cloneElement(c, {
      key: `col-` + i,
      colWidths: mergedProps.colWidths,
      cellStyle: mergedProps.cellStyle,
      bordered: mergedProps.bordered,
      borderedInside: mergedProps.borderedInside,
      borderedVertical: mergedProps.borderedVertical,
      borderColor: mergedProps.borderColor,
      borderWidth: mergedProps.borderWidth,
      borderStyle: mergedProps.borderStyle,
      ...c.props,
      colIndex: i,
      colCount: arr.length,
    });
  });

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
        ...mergedProps.rowStyle,
        ...stripedStyleOverride,
        ...classNameStyles,
        ...style,
      }}
    >
      <ThemedChildren>{injectedChildArray}</ThemedChildren>
    </Box>
  );
};
