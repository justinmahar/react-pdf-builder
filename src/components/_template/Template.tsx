import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { SwatchColor } from '../../themes/ColorScheme';
import { Style } from '../Style';
import { ThemeBuilder } from '../../themes/ThemeBuilder';

export interface TemplateProps extends ViewProps {
  children?: any;
  className?: string;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const Template = ({ children, theme = Themes.default.build(), className, style, ...props }: TemplateProps) => {
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
    <View
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
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
