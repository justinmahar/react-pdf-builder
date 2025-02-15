import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { ThemedText } from '../basics/ThemedText';
import { Div } from '../basics/ThemedView';
import { ThemedChildren } from '../children/ThemedChildren';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ListItemContainerProps extends ViewProps {
  children?: any;
  num?: number;
  markerStyle?: Style;
  markerSwatch?: SwatchColor;
  bullet?: string;
  numberRenderer?: (num: number) => string;
  unstyled?: boolean;
  swatch?: SwatchColor;
}

export const ListItemContainer = ({ children, markerStyle, style, ...props }: ListItemContainerProps) => {
  const theme = usePDFThemeContext();
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
    <Div {...mergedProps} style={{ ...styleInnate, ...mergedProps.style, ...styleOverride, ...style }}>
      {!mergedProps.unstyled && (
        <ThemedText style={{ ...mergedMarkerStyle }}>
          {isNumbered ? numberRenderer(mergedProps.num ?? 0) : bullet}
        </ThemedText>
      )}
      <ThemedChildren>{children}</ThemedChildren>
    </Div>
  );
};
