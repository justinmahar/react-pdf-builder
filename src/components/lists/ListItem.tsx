import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { Style } from '../Style';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';

export interface ListItemProps extends ViewProps {
  children?: any;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const ListItem = ({ children, theme = Themes.default.build(), style, ...props }: ListItemProps) => {
  const themeProps = theme?.listItemProps;
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
    <View {...mergedProps} style={{ ...styleInnate, ...themeProps?.style, ...styleOverride, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
