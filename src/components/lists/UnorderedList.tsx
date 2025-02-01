import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ListItemWrapper, ListItemWrapperProps } from './ListItemWrapper';
import { Style } from '../Style';
import { PDFSafeChildren } from '../PDFSafeChildren';

export interface UnorderedListProps extends ViewProps {
  children?: any;
  wrapItems?: boolean;
  markerStyle?: Style;
  wrapperProps?: ListItemWrapperProps;
  bullet?: string;
}

export const UnorderedList = ({
  children,
  wrapItems = false,
  markerStyle,
  wrapperProps,
  bullet,
  ...props
}: UnorderedListProps) => {
  const childArray = Array.isArray(children) ? children : [children];

  const liElements: JSX.Element[] = childArray.map((c, i) => (
    <ListItemWrapper bullet={bullet} markerStyle={markerStyle} wrap={wrapItems} key={'ul-li-' + i} {...wrapperProps}>
      <PDFSafeChildren>{c}</PDFSafeChildren>
    </ListItemWrapper>
  ));

  return (
    <View
      {...props}
      style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, fontSize: 18, ...props.style }}
    >
      {liElements}
    </View>
  );
};
