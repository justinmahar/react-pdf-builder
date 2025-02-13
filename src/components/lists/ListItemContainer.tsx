import { Text, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';
import { Style } from '../Style';
import { Div } from '../basics/ThemedView';
import { ThemedChildren } from '../children/ThemedChildren';
import { ThemedText } from '../basics/ThemedText';

export interface ListItemContainerProps extends ViewProps {
  children?: any;
  num?: number;
  markerStyle?: Style;
  markerSwatch?: SwatchColor;
  bullet?: string;
  numberRenderer?: (num: number) => string;
  unstyled?: boolean;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const ListItemContainer = ({ children, theme, markerStyle, style, ...props }: ListItemContainerProps) => {
  theme = theme ?? Themes.default.build();
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
    <Div theme={theme} {...mergedProps} style={{ ...styleInnate, ...mergedProps.style, ...styleOverride, ...style }}>
      {!mergedProps.unstyled && (
        <ThemedText theme={theme} style={{ ...mergedMarkerStyle }}>
          {isNumbered ? numberRenderer(mergedProps.num ?? 0) : bullet}
        </ThemedText>
      )}
      <ThemedChildren theme={theme}>{children}</ThemedChildren>
    </Div>
  );
};
