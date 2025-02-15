import { TextProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { ThemedText } from '../basics/ThemedText';
import { ThemedChildren } from '../children/ThemedChildren';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ParagraphProps extends TextProps {
  children?: any;
  className?: string;
  swatch?: SwatchColor;
}

export const Paragraph = ({ children, className, style, ...props }: ParagraphProps) => {
  const theme = usePDFThemeContext();
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
    <ThemedText
      {...mergedProps}
      style={{ ...themeClassNameStyles, ...themeProps?.style, ...styleOverride, ...classNameStyles, ...style }}
    >
      <ThemedChildren allowStrings>{children}</ThemedChildren>
    </ThemedText>
  );
};
