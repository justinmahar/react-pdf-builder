import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Div } from '../basics/ThemedView';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface TemplateProps extends ViewProps {
  children?: any;
  className?: string;
  swatch?: SwatchColor;
}

export const Template = ({ children, className, style, ...props }: TemplateProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme?.cardProps; // TODO: Assign to correct theme props and remove this TODO comment
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {};

  const styleOverride: Style = {};

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
    >
      <ThemedChildren>{children}</ThemedChildren>
    </Div>
  );
};
