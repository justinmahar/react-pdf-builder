import React from 'react';
import { Style } from '../../../Style';
import { Box, BoxProps } from '../layout/Box';

export interface TableProps extends BoxProps {
  children?: any;
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

export const Table = ({
  children,
  striped = false,
  stripeStyle = { backgroundColor: '#EEEEEE88' },
  bordered = false,
  borderedOutside = false,
  borderedInside = false,
  borderedVertical = false,
  borderedHorizontal = false,
  borderColor = '#000000',
  borderStyle = 'solid',
  borderWidth = 2,
  ...props
}: TableProps) => {
  const style: Style = {
    marginBottom: 10,
    overflow: 'hidden',
    borderTop: bordered || borderedOutside || borderedHorizontal ? borderWidth : undefined,
    borderBottom: bordered || borderedOutside || borderedHorizontal ? borderWidth : undefined,
    borderRight: bordered || borderedOutside || borderedVertical ? borderWidth : undefined,
    borderLeft: bordered || borderedOutside || borderedVertical ? borderWidth : undefined,
    borderColor,
  };

  const childArray = (Array.isArray(children) ? children : [children]).map((c, i, arr) => {
    return React.cloneElement(c, {
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
      rowIndex: i,
      rowCount: arr.length,
    });
  });

  return (
    <Box direction="y" {...props} style={{ ...style, ...props.style }}>
      {childArray}
    </Box>
  );
};
