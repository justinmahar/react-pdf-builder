import { Text, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../Style';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Themes } from '../theme/themes/Themes';
import { Theme } from '../theme/Theme';
import { SwatchColor } from '../theme/themes/ColorScheme';
import { ThemeBuilder } from '../theme/ThemeBuilder';

export interface ListItemContainerProps extends ViewProps {
  children?: any;
  undecorated?: boolean;
  num?: number;
  markerStyle?: Style;
  markerSwatch?: SwatchColor;
  bullet?: string;
  numberRenderer?: (num: number) => string;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const ListItemContainer = ({
  children,
  theme = Themes.default.build(),
  markerStyle,
  style,
  ...props
}: ListItemContainerProps) => {
  const mergedProps = {
    ...theme?.listItemContainerProps,
    ...props,
  };

  const markerStyleOverride: Style = {};
  if (mergedProps.markerSwatch) {
    markerStyleOverride.color = ThemeBuilder.getSwatchColor(mergedProps.markerSwatch, theme.colorScheme);
  }

  const mergedMarkerStyle = {
    ...mergedProps.markerStyle,
    ...theme.listItemMarkerProps?.style,
    ...markerStyleOverride,
    ...markerStyle,
  };

  const styleInnate: Style = {
    display: 'flex',
    flexDirection: 'row',
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    styleOverride.color = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
  }

  const numberRenderer = mergedProps.numberRenderer ?? ((num: number) => `${num}.`);
  const isNumbered = typeof mergedProps.num !== 'undefined';
  const bullet = mergedProps.bullet ?? '•';
  return (
    <View {...mergedProps} style={{ ...styleInnate, ...mergedProps.style, ...styleOverride, ...style }}>
      {!mergedProps.undecorated && (
        <Text style={{ ...mergedMarkerStyle }}>{isNumbered ? numberRenderer(mergedProps.num ?? 0) : bullet}</Text>
      )}
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
