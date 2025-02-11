import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { SwatchColor } from '../../themes/ColorScheme';
import { Style } from '../Style';

export interface TemplateProps extends ViewProps {
  children?: any;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const Template = ({ children, theme = Themes.default.build(), style, ...props }: TemplateProps) => {
  const themeProps = theme?.cardProps; // TODO: Assign to correct theme props and remove this TODO comment
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {};

  const styleOverride: Style = {};

  return (
    <View {...mergedProps} style={{ ...styleInnate, ...mergedProps?.style, ...styleOverride, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
