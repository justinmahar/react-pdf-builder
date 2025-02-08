import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Style } from '../Style';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { SwatchColor } from '../theme/themes/ColorScheme';
import { ThemeBuilder } from '../theme/ThemeBuilder';
import Color from 'color';

export interface TableRowProps extends BoxProps {
  children?: any;
  rowIndex?: number;
  rowCount?: number;
  striped?: boolean;
  stripeStyle?: Style;
  inverseStriped?: boolean;
  stripeOpacity?: number;
  rowStyle?: Style;
  cellStyle?: Style;
  bordered?: boolean;
  borderedOutside?: boolean;
  borderedInside?: boolean;
  borderedVertical?: boolean;
  borderedHorizontal?: boolean;
  borderColor?: string;
  borderStyle?: 'dashed' | 'dotted' | 'solid';
  borderWidth?: string | number;
  colWidths?: (string | number)[];
  swatchOpacity?: number;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const TableRow = ({ children, theme = Themes.default.build(), stripeStyle, style, ...props }: TableRowProps) => {
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
  const originalChildArray = Array.isArray(children) ? children : typeof children !== 'undefined' ? [children] : [];
  const injectedChildArray = originalChildArray.map((c, i, arr) => {
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
      theme,
      ...c.props,
      colIndex: i,
      colCount: arr.length,
    });
  });

  return (
    <Box
      wrap={false}
      direction="x"
      {...mergedProps}
      style={{
        ...styleInnate,
        ...themeProps?.style,
        ...styleOverride,
        ...mergedProps.rowStyle,
        ...stripedStyleOverride,
        ...style,
      }}
    >
      <PDFSafeChildren>{injectedChildArray}</PDFSafeChildren>
    </Box>
  );
};
