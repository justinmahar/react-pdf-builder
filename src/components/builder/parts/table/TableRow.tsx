import React from 'react';
import { Style } from '../../../Style';
import { PDFSafeChildren } from '../PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Text } from '@react-pdf/renderer';

export interface TableRowProps extends BoxProps {
  children?: any;
  rowIndex?: number;
  rowCount?: number;

  striped?: boolean;
  stripeStyle?: Style | Style[];
  inverseStriped?: boolean;
  rowStyle?: Style | Style[];
  cellStyle?: Style | Style[];
  bordered?: boolean;
  borderedOutside?: boolean;
  borderedInside?: boolean;
  borderedVertical?: boolean;
  borderedHorizontal?: boolean;
  borderColor?: string;
  borderStyle?: 'dashed' | 'dotted' | 'solid';
  borderWidth?: string | number;
  colWidths?: (string | number)[];
}

export const TableRow = ({
  children,
  rowIndex,
  rowCount,
  striped,
  stripeStyle,
  inverseStriped,
  rowStyle: rowStyleProp,
  cellStyle,
  bordered,
  borderedOutside,
  borderedInside,
  borderedVertical,
  borderedHorizontal,
  borderColor,
  borderStyle,
  borderWidth,
  colWidths,
  ...props
}: TableRowProps) => {
  const originalChildArray = Array.isArray(children) ? children : [children];

  const firstRow = rowIndex === 0;
  const isRowEven = !((rowIndex ?? 0) % 2);
  const isStripedRow = (striped && !isRowEven) || (inverseStriped && isRowEven);

  const rowStyle: Style = {
    overflow: 'hidden',
    borderTop:
      (bordered && !firstRow) || (borderedInside && !firstRow) || (borderedHorizontal && !firstRow)
        ? borderWidth
        : undefined,
    borderRight: bordered || borderedOutside || borderedVertical ? borderWidth : undefined,
    borderLeft: bordered || borderedOutside || borderedVertical ? borderWidth : undefined,
    borderColor,
    ...(isStripedRow ? stripeStyle : {}),
    ...rowStyleProp,
  };

  const childArray = originalChildArray.map((c, i, arr) => {
    return React.cloneElement(c, {
      key: `col-` + i,
      striped,
      stripeStyle,
      inverseStriped,
      cellStyle,
      bordered,
      borderedOutside,
      borderedInside,
      borderedVertical,
      borderedHorizontal,
      borderColor,
      borderStyle,
      borderWidth,
      colWidths,
      ...c.props,
      rowIndex,
      rowCount,
      colIndex: i,
      colCount: arr.length,
    });
  });

  return (
    <Box wrap={false} direction="x" {...props} style={{ ...rowStyle, ...props.style }}>
      <PDFSafeChildren>{childArray}</PDFSafeChildren>
    </Box>
  );
};
