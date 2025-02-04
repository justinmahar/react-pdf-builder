import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ListItemContainer, ListItemContainerProps } from './ListItemContainer';
import { Style } from '../Style';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface UnorderedListProps extends ViewProps {
  children?: any;
  wrapItems?: boolean;
  markerStyle?: Style;
  wrapperProps?: ListItemContainerProps;
  bullet?: string;
  theme?: Theme;
}

export const UnorderedList = ({ theme = Themes.default.create(), children, style, ...props }: UnorderedListProps) => {
  const mergedProps = {
    ...theme.unorderedListProps,
    ...props,
  };

  const mergedWrapperProps = {
    ...theme.listItemContainerProps,
    ...props.wrapperProps,
  };

  const childArray = Array.isArray(children) ? children : [children];

  const liElements: JSX.Element[] = childArray.map((c, i) => (
    <ListItemContainer
      key={'ul-li-' + i}
      wrap={!!mergedProps.wrapItems}
      markerStyle={mergedProps.markerStyle}
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
    <View {...mergedProps} style={{ ...styleInnate, ...mergedProps?.style, ...style }}>
      {liElements}
    </View>
  );
};
