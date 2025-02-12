import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../Style';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../../themes/Theme';
import { SwatchColor } from '../../themes/ColorScheme';
import { Themes } from '../../themes/Themes';
import { ThemeBuilder } from '../../themes/ThemeBuilder';

export interface SignatureProps extends BoxProps {
  children?: any;
  className?: string;
  lineSize?: number;
  x?: boolean;
  xProps?: TextProps;
  xValue?: string;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const Signature = ({ children, theme = Themes.default.build(), className, style, ...props }: SignatureProps) => {
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
      direction="x"
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
        <Text {...mergedProps.xProps} style={{ ...mergedProps.xProps?.style, ...xStyleOverride }}>
          {mergedProps.xValue ?? 'X'}
        </Text>
      )}
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Box>
  );
};
