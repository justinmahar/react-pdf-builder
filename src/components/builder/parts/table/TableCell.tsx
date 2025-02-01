import React from 'react';
import { Style } from '../../../Style';
import { PDFChildren } from '../PDFChildren';
import { Box, BoxProps } from '../layout/Box';

export interface TableCellProps extends BoxProps {
  children?: any;
  rowIndex?: number;
  rowCount?: number;
  colIndex?: number;
  colCount?: number;

  striped?: boolean;
  stripeStyle?: Style;
  bordered?: boolean;
  borderedOutside?: boolean;
  borderedInside?: boolean;
  borderedVertical?: boolean;
  borderedHorizontal?: boolean;
  borderColor?: string;
  borderStyle?: 'dashed' | 'dotted' | 'solid';
  borderWidth?: string | number;
}

export const TableCell = ({
  children,
  rowIndex,
  rowCount,
  colIndex,
  colCount,
  striped,
  stripeStyle,
  bordered,
  borderedOutside,
  borderedInside,
  borderedVertical,
  borderedHorizontal,
  borderColor,
  borderStyle,
  borderWidth,
  ...props
}: TableCellProps) => {
  const firstRow = rowIndex === 0;
  const lastRow = rowIndex === (rowCount ?? 0) - 1;
  const firstCol = colIndex === 0;
  const lastCol = colIndex === (colCount ?? 0) - 1;

  const style: Style = {
    overflow: 'hidden',
    borderTop: undefined,
    borderBottom: undefined,
    borderRight: !lastCol && (bordered || borderedInside || borderedVertical) ? borderWidth : undefined,
    // borderLeft: undefined,
    borderColor,
  };
  return (
    <Box direction="y" {...props} style={{ ...style, ...props.style }}>
      <PDFChildren>{children}</PDFChildren>
    </Box>
  );
};
