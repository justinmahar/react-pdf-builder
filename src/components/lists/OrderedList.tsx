import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ListItemContainer, ListItemContainerProps } from './ListItemContainer';
import { Style } from '../Style';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface OrderedListProps extends ViewProps {
  children?: any;
  wrapItems?: boolean;
  markerStyle?: Style;
  wrapperProps?: ListItemContainerProps;
  numberRenderer?: (num: number) => string;
  theme?: Theme;
}

export const OrderedList = ({ theme = Themes.default.build(), children, style, ...props }: OrderedListProps) => {
  const mergedProps = {
    ...theme.orderedListProps,
    ...props,
  };

  const mergedWrapperProps = {
    ...theme.listItemContainerProps,
    ...props.wrapperProps,
  };

  const childArray = Array.isArray(children) ? children : [children];

  const liElements: JSX.Element[] = childArray.map((c, i) => (
    <ListItemContainer
      key={'ol-li-' + i}
      theme={theme}
      wrap={!!mergedProps.wrapItems}
      markerStyle={mergedProps.markerStyle}
      numberRenderer={mergedProps.numberRenderer}
      {...mergedWrapperProps}
      num={i + 1}
    >
      <PDFSafeChildren>{c}</PDFSafeChildren>
    </ListItemContainer>
  ));

  const styleInnate: Style = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <View {...mergedProps} style={{ ...styleInnate, ...mergedProps?.style, ...style }}>
      {liElements}
    </View>
  );
};
