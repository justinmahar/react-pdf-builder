import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFChildren } from '../PDFChildren';

export interface ListItemProps extends ViewProps {
  children?: any;
}

export const ListItem = ({ children, ...props }: ListItemProps) => {
  return (
    <View {...props}>
      <PDFChildren>{children}</PDFChildren>
    </View>
  );
};
