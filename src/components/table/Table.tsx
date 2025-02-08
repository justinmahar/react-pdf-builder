import React from 'react';
import { Style } from '../Style';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { SwatchColor } from '../theme/themes/ColorScheme';
import { ThemeBuilder } from '../theme/ThemeBuilder';
import Color from 'color';

export interface TableProps extends BoxProps {
  children?: any;
  striped?: boolean;
  stripeStyle?: Style;
  inverseStriped?: boolean;
  stripeOpacity?: number;
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
  swatch?: SwatchColor;
  theme?: Theme;
}

export const Table = ({ children, theme = Themes.default.build(), style, ...props }: TableProps) => {
  const themeProps = theme?.tableProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    mergedProps.borderColor = props.borderColor ?? swatchColor;
    const stripeOpacity = mergedProps.stripeOpacity ?? 0.133;
    const stripeOpacityHex = ThemeBuilder.decimalToHex(stripeOpacity);
    mergedProps.stripeStyle = props.stripeStyle ?? {
      backgroundColor: `${new Color(swatchColor ?? '#888').hex()}${stripeOpacityHex}`, // Add opacity to the end
    };
  }

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
  const originalChildArray = Array.isArray(children) ? children : typeof children !== 'undefined' ? [children] : [];
  const injectedChildArray = originalChildArray.map((c, i, arr) => {
    return React.cloneElement(c, {
      key: `row-` + i,
      striped: mergedProps.striped,
      stripeStyle: mergedProps.stripeStyle,
      inverseStriped: mergedProps.inverseStriped,
      stripeOpacity: mergedProps.stripeOpacity,
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
        ...themeProps?.style,
        ...styleOverride,
        ...style,
      }}
    >
      {injectedChildArray}
    </Box>
  );
};
