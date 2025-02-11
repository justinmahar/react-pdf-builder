import React from 'react';
import { Style } from '../Style';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { SwatchColor } from '../theme/ColorScheme';
import { ThemeBuilder } from '../theme/ThemeBuilder';
import Color from 'color';

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
  swatch?: SwatchColor;
  swatchOpacity?: number;
  theme?: Theme;
}

export const TableCell = ({ children, theme = Themes.default.build(), style, ...props }: TableCellProps) => {
  const themeProps = theme.tableCellProps;
  const mergedProps = {
    ...themeProps,
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
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    const swatchOpacity = mergedProps.swatchOpacity ?? 0.134;
    const swatchOpacityHex = ThemeBuilder.decimalToHex(swatchOpacity);
    styleOverride.backgroundColor = `${new Color(swatchColor ?? '#888').hex()}${swatchOpacityHex}`; // Add opacity to the end
  }

  return (
    <Box
      direction="y"
      {...mergedProps}
      style={{
        ...styleInnate,
        ...themeProps?.style,
        ...styleOverride,
        ...mergedProps.cellStyle,
        ...style,
      }}
    >
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Box>
  );
};
