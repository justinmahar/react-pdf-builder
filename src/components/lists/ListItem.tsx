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
  className?: string;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const ListItem = ({ children, theme = Themes.default.build(), className, style, ...props }: ListItemProps) => {
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

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <View
      {...mergedProps}
      style={{
        ...styleInnate,
        ...themeClassNameStyles,
        ...themeProps?.style,
        ...styleOverride,
        ...classNameStyles,
        ...style,
      }}
    >
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
