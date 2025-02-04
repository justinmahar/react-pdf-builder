import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Style } from '../Style';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface TableRowProps extends BoxProps {
  children?: any;
  rowIndex?: number;
  rowCount?: number;
  striped?: boolean;
  stripeStyle?: Style;
  inverseStriped?: boolean;
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
  theme?: Theme;
}

export const TableRow = ({
  children,
  theme = Themes.default.create(),
  stripeStyle,
  style,
  ...props
}: TableRowProps) => {
  const mergedProps = {
    ...theme.tableRowProps,
    ...props,
  };

  const firstRow = props.rowIndex === 0;
  const isRowEven = !((props.rowIndex ?? 0) % 2);
  const isStripedRow = (mergedProps.striped && !isRowEven) || (mergedProps.inverseStriped && isRowEven);

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  const styleOverride: Style = {};

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
  const originalChildArray = Array.isArray(children) ? children : [children];
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
        ...mergedProps.style,
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
