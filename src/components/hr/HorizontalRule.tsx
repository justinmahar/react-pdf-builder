import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Div } from '../basics/Div';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface HorizontalRuleProps extends ViewProps {
  className?: string;
  swatch?: SwatchColor;
}

export const HorizontalRule = ({ className, style, ...props }: HorizontalRuleProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme?.hrProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {};

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    styleOverride.borderColor = swatchColor;
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Div
      {...mergedProps}
      style={{
        ...styleInnate,
        ...themeClassNameStyles,
        ...mergedProps?.style,
        ...styleOverride,
        ...classNameStyles,
        ...style,
      }}
    />
  );
};
