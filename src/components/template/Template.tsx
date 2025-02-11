import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { SwatchColor } from '../theme/ColorScheme';
import { Style } from '../Style';

export interface TemplateProps extends ViewProps {
  children?: any;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const Template = ({ children, theme = Themes.default.build(), style, ...props }: TemplateProps) => {
  const mergedProps = {
    ...theme?.cardProps,
    ...props,
  };

  const styleOverride: Style = {};

  return (
    <View {...mergedProps} style={{ ...mergedProps?.style, ...styleOverride, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
