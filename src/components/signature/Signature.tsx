import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../Style';
import { ThemedChildren } from '../children/ThemedChildren';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../../themes/Theme';
import { SwatchColor } from '../../themes/ColorScheme';
import { Themes } from '../../themes/Themes';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { ThemedText } from '../basics/ThemedText';

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

export const Signature = ({ children, theme, className, style, ...props }: SignatureProps) => {
  theme = theme ?? Themes.default.build();
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
      theme={theme}
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
        <ThemedText theme={theme} {...mergedProps.xProps} style={{ ...mergedProps.xProps?.style, ...xStyleOverride }}>
          {mergedProps.xValue ?? 'X'}
        </ThemedText>
      )}
      <ThemedChildren theme={theme}>{children}</ThemedChildren>
    </Box>
  );
};
