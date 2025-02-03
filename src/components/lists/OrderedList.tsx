import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ListItemWrapper, ListItemWrapperProps } from './ListItemWrapper';
import { Style } from '../Style';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';

export interface OrderedListProps extends ViewProps {
  children?: any;
  wrapItems?: boolean;
  markerStyle?: Style;
  wrapperProps?: ListItemWrapperProps;
  numberRenderer?: (num: number) => string;
}

export const OrderedList = ({
  children,
  wrapItems = false,
  markerStyle,
  wrapperProps,
  numberRenderer,
  ...props
}: OrderedListProps) => {
  const childArray = Array.isArray(children) ? children : [children];

  const liElements: JSX.Element[] = childArray.map((c, i) => (
    <ListItemWrapper
      markerStyle={markerStyle}
      wrap={wrapItems}
      numberRenderer={numberRenderer}
      num={i + 1}
      key={'ol-li-' + i}
      {...wrapperProps}
    >
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
