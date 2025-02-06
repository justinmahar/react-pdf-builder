import { Text, TextProps } from '@react-pdf/renderer';
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
  const mergedProps = {
    ...theme?.paragraphProps,
    ...props,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    styleOverride.color = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
  }

  return (
    <Text {...mergedProps} style={{ ...mergedProps?.style, ...styleOverride, ...style }}>
      {children}
    </Text>
  );
};
