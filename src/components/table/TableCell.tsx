import React from 'react';
import { Style } from '../Style';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface TableCellProps extends BoxProps {
  children?: any;
  colIndex?: number;
  colCount?: number;
  colWidths?: (string | number)[];
  cellStyle?: Style;
  bordered?: boolean;
  borderedInside?: boolean;
  borderedVertical?: boolean;
  borderColor?: string;
  borderWidth?: string | number;
  borderStyle?: 'dashed' | 'dotted' | 'solid';
  theme?: Theme;
}

export const TableCell = ({ children, theme = Themes.default.create(), style, ...props }: TableCellProps) => {
  const mergedProps = {
    ...theme.tableCellProps,
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

  return (
    <Box
      direction="y"
      {...mergedProps}
      style={{
        ...styleInnate,
        ...mergedProps.style,
        ...styleOverride,
        ...mergedProps.cellStyle,
        ...style,
      }}
    >
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Box>
  );
};
