import { Text, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../Style';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Themes } from '../theme/themes/Themes';
import { Theme } from '../theme/Theme';

export interface ListItemContainerProps extends ViewProps {
  children?: any;
  undecorated?: boolean;
  num?: number;
  markerStyle?: Style;
  bullet?: string;
  numberRenderer?: (num: number) => string;
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

  const mergedMarkerStyle = {
    ...mergedProps.markerStyle,
    ...theme.listItemMarkerProps?.style,
    ...markerStyle,
  };

  const styleInnate: Style = {
    display: 'flex',
    flexDirection: 'row',
  };

  const numberRenderer = mergedProps.numberRenderer ?? ((num: number) => `${num}.`);
  const isNumbered = typeof mergedProps.num !== 'undefined';
  const bullet = mergedProps.bullet ?? '•';
  return (
    <View {...mergedProps} style={{ ...styleInnate, ...mergedProps.style, ...style }}>
      {!mergedProps.undecorated && (
        <Text style={{ ...mergedMarkerStyle }}>{isNumbered ? numberRenderer(mergedProps.num ?? 0) : bullet}</Text>
      )}
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
