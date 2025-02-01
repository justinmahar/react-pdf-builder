import React from 'react';
import { Style } from '../../../Style';
import { PDFChildren } from '../PDFChildren';
import { Box, BoxProps } from '../layout/Box';
import { Text } from '@react-pdf/renderer';

export interface TableRowProps extends BoxProps {
  children?: any;
  rowIndex?: number;
  rowCount?: number;

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

export const TableRow = ({
  children,
  rowIndex,
  rowCount,
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
}: TableRowProps) => {
  const firstRow = rowIndex === 0;
  const lastRow = rowIndex === (rowCount ?? 0) - 1;

  const style: Style = {
    overflow: 'hidden',
    borderTop:
      (bordered && !firstRow) || (borderedInside && !firstRow) || (borderedHorizontal && !firstRow)
        ? borderWidth
        : undefined,
    borderColor,
  };

  const childArray = (Array.isArray(children) ? children : [children]).map((c, i, arr) =>
    React.cloneElement(c, {
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
      ...c.props,
      rowIndex,
      rowCount,
      colIndex: i,
      colCount: arr.length,
    }),
  );

  return (
    <Box direction="x" {...props} style={{ ...style, ...props.style }}>
      <PDFChildren>{childArray}</PDFChildren>
    </Box>
  );
};
