import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';

export interface ListItemProps extends ViewProps {
  children?: any;
}

export const ListItem = ({ children, ...props }: ListItemProps) => {
  return (
    <View {...props}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
