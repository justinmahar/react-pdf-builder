import React from 'react';
import { Style } from '../Style';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface TableProps extends BoxProps {
  children?: any;
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

export const Table = ({ children, theme = Themes.default.create(), style, ...props }: TableProps) => {
  const mergedProps = {
    ...theme?.tableProps,
    ...props,
  };

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
  const originalChildArray = Array.isArray(children) ? children : [children];
  const injectedChildArray = originalChildArray.map((c, i, arr) => {
    return React.cloneElement(c, {
      key: `row-` + i,
      striped: mergedProps.striped,
      stripeStyle: mergedProps.stripeStyle,
      inverseStriped: mergedProps.inverseStriped,
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
      theme,
      ...c.props,
      rowIndex: i,
      rowCount: arr.length,
    });
  });

  return (
    <Box
      direction="y"
      {...mergedProps}
      style={{
        ...styleInnate,
        ...mergedProps.style,
        ...styleOverride,
        ...style,
      }}
    >
      {injectedChildArray}
    </Box>
  );
};
