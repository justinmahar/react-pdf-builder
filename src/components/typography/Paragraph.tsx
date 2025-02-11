import { Text, TextProps, View } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../Style';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { SwatchColor } from '../../themes/ColorScheme';
import { Themes } from '../../themes/Themes';

export interface ParagraphProps extends TextProps {
  children?: any;
  className?: string;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const Paragraph = ({ children, theme = Themes.default.build(), className, style, ...props }: ParagraphProps) => {
  const themeProps = theme?.paragraphProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    styleOverride.color = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Text
      {...mergedProps}
      style={{ ...themeClassNameStyles, ...themeProps?.style, ...styleOverride, ...classNameStyles, ...style }}
    >
      {children}
    </Text>
  );
};
