import { Text, TextProps, View } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../Style';
import { Theme } from '../theme/Theme';
import { ThemeBuilder } from '../theme/ThemeBuilder';
import { SwatchColor } from '../theme/themes/ColorScheme';
import { Themes } from '../theme/themes/Themes';

export interface ParagraphProps extends TextProps {
  children?: any;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const Paragraph = ({ children, theme = Themes.default.build(), style, ...props }: ParagraphProps) => {
  const themeProps = theme?.paragraphProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {
    width: '100%',
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    styleOverride.color = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
  }

  return (
    <Text {...mergedProps} style={{ ...styleInnate, ...themeProps?.style, ...styleOverride, ...style }}>
      {children}
    </Text>
  );
};
