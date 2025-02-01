import React from 'react';
import { Style } from '../Style';
import { PDFSafeChildren } from '../PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';

export interface TableCellProps extends BoxProps {
  children?: any;
  colIndex?: number;
  colCount?: number;
  colWidths?: (string | number)[];

  cellStyle?: Style | Style[];
  bordered?: boolean;
  borderedInside?: boolean;
  borderedVertical?: boolean;
  borderColor?: string;
  borderWidth?: string | number;
}

export const TableCell = ({
  children,
  colIndex,
  colCount,
  colWidths,
  cellStyle: cellStyleProp,
  bordered,
  borderedInside,
  borderedVertical,
  borderColor,
  borderWidth,
  ...props
}: TableCellProps) => {
  const lastCol = colIndex === (colCount ?? 0) - 1;

  // Use the defined width, or calculate a percentage if none was provided.
  const colWidth =
    colWidths && typeof colIndex !== 'undefined' ? colWidths[colIndex] : `${Math.round(100 / (colCount ?? 1))}%`;

  const cellStyle: Style = {
    overflow: 'hidden',
    borderTop: undefined,
    borderBottom: undefined,
    borderRight: !lastCol && (bordered || borderedInside || borderedVertical) ? borderWidth : undefined,
    borderColor,
    padding: 8,
    width: colWidth,
    ...cellStyleProp,
  };
  return (
    <Box direction="y" {...props} style={{ ...cellStyle, ...props.style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Box>
  );
};
