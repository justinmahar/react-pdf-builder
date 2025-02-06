import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ListItemContainer, ListItemContainerProps } from './ListItemContainer';
import { Style } from '../Style';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { SwatchColor } from '../theme/themes/ColorScheme';
import { ThemeBuilder } from '../theme/ThemeBuilder';

export interface UnorderedListProps extends ViewProps {
  children?: any;
  wrapItems?: boolean;
  markerStyle?: Style;
  markerSwatch?: SwatchColor;
  containerProps?: ListItemContainerProps;
  bullet?: string;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const UnorderedList = ({ theme = Themes.default.build(), children, style, ...props }: UnorderedListProps) => {
  const mergedProps = {
    ...theme.unorderedListProps,
    ...props,
  };

  const mergedWrapperProps = {
    ...theme.listItemContainerProps,
    ...props.containerProps,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    styleOverride.color = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
  }

  const childArray = Array.isArray(children) ? children : [children];

  const liElements: JSX.Element[] = childArray.map((c, i) => (
    <ListItemContainer
      key={'ul-li-' + i}
      theme={theme}
      wrap={!!mergedProps.wrapItems}
      markerStyle={mergedProps.markerStyle}
      markerSwatch={mergedProps.markerSwatch}
      bullet={mergedProps.bullet}
      {...mergedWrapperProps}
    >
      <PDFSafeChildren>{c}</PDFSafeChildren>
    </ListItemContainer>
  ));

  const styleInnate: Style = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <View {...mergedProps} style={{ ...styleInnate, ...mergedProps?.style, ...styleOverride, ...style }}>
      {liElements}
    </View>
  );
};
