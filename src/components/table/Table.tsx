import Color from 'color';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { getThemedChildren } from '../children/ThemedChildren';
import { Box, BoxProps } from '../layout/Box';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface TableProps extends BoxProps {
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
}

export const Table = ({ children, className, style, ...props }: TableProps) => {
  const theme = usePDFThemeContext();
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
  const themedChildren = getThemedChildren(children);
  const injectedChildArray = themedChildren.map((c, i, arr) => {
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
      ...c.props,
      rowIndex: i,
      rowCount: arr.length,
    });
  });

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Box
      dir="y"
      {...mergedProps}
      style={{
        ...styleInnate,
        ...themeClassNameStyles,
        ...themeProps?.style,
        ...styleOverride,
        ...classNameStyles,
        ...style,
      }}
    >
      {injectedChildArray}
    </Box>
  );
};
