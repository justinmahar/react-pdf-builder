import { Text, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../PDFSafeChildren';
import { Style } from '../../../Style';

export interface ListItemWrapperProps extends ViewProps {
  children?: any;
  undecorated?: boolean;
  num?: number;
  markerStyle?: Style;
  bullet?: string;
  numberRenderer?: (num: number) => string;
}

export const ListItemWrapper = ({
  children,
  undecorated = false,
  num,
  markerStyle,
  bullet = '•',
  numberRenderer = (num) => `${num}.`,
  ...props
}: ListItemWrapperProps) => {
  const isNumbered = typeof num !== 'undefined';
  return (
    <View {...props} style={{ display: 'flex', flexDirection: 'row', columnGap: 10, paddingRight: 30, ...props.style }}>
      {!undecorated && <Text style={markerStyle}>{isNumbered ? numberRenderer(num) : bullet}</Text>}
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
