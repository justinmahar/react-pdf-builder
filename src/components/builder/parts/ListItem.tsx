import React from 'react';
import { TextProps, View, ViewProps } from '@react-pdf/renderer';
import { BuilderChildren } from './BuilderChildren';

export interface ListItemProps extends ViewProps {
  children: any;
}

export const ListItem = ({ children, ...props }: ListItemProps) => {
  return (
    <View {...props}>
      <BuilderChildren>{children}</BuilderChildren>
    </View>
  );
};
