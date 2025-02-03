import React from 'react';
import { Style } from '../Style';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../theme/Theme';

export interface TableProps extends BoxProps {
  children?: any;
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
  theme?: Theme;
}

export const Table = ({
  children,
  striped = false,
  stripeStyle = { backgroundColor: '#00000015' },
  inverseStriped = false,
  rowStyle,
  cellStyle,
  bordered = false,
  borderedOutside = false,
  borderedInside = false,
  borderedVertical = false,
  borderedHorizontal = false,
  borderColor = '#000000',
  borderStyle = 'solid',
  borderWidth = 1,
  colWidths,
  theme,
  ...props
}: TableProps) => {
  const tableStyle: Style = {
    marginBottom: 10,
    overflow: 'hidden',
    borderTop: bordered || borderedOutside || borderedHorizontal ? borderWidth : undefined,
    borderBottom: bordered || borderedOutside || borderedHorizontal ? borderWidth : undefined,
    // borderRight: bordered || borderedOutside || borderedVertical ? borderWidth : undefined,
    // borderLeft: bordered || borderedOutside || borderedVertical ? borderWidth : undefined,
    borderColor,
  };

  const childArray = (Array.isArray(children) ? children : [children]).map((c, i, arr) => {
    return React.cloneElement(c, {
      key: `row-` + i,
      striped,
      stripeStyle,
      inverseStriped,
      rowStyle,
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
      theme,
      ...c.props,
      rowIndex: i,
      rowCount: arr.length,
    });
  });

  return (
    <Box direction="y" {...props} style={{ ...tableStyle, ...props.style }}>
      {childArray}
    </Box>
  );
};
