import { TextProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { ThemedText } from '../basics/ThemedText';
import { ThemedChildren } from '../children/ThemedChildren';
import { Box, BoxProps } from '../layout/Box';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface SignatureProps extends BoxProps {
  children?: any;
  className?: string;
  lineSize?: number;
  x?: boolean;
  xProps?: TextProps;
  xValue?: string;
  swatch?: SwatchColor;
}

export const Signature = ({ children, className, style, ...props }: SignatureProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme?.signatureProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {
    alignItems: 'flex-end',
  };

  const styleOverride: Style = {};
  const xStyleOverride: Style = {};
  if (typeof mergedProps.lineSize !== 'undefined') {
    styleOverride.borderBottom = mergedProps.lineSize;
  }
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    styleOverride.borderColor = swatchColor;
    styleOverride.color = swatchColor;
    xStyleOverride.color = swatchColor;
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Box
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
      {mergedProps.x && (
        <ThemedText {...mergedProps.xProps} style={{ ...mergedProps.xProps?.style, ...xStyleOverride }}>
          {mergedProps.xValue ?? 'X'}
        </ThemedText>
      )}
      <ThemedChildren>{children}</ThemedChildren>
    </Box>
  );
};
