import { Text, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { BuilderChildren } from './BuilderChildren';

export interface ListItemWrapperProps extends ViewProps {
  children: any;
  undecorated?: boolean;
  num?: number;
}

export const ListItemWrapper = ({ children, undecorated = false, num, ...props }: ListItemWrapperProps) => {
  const isNumbered = typeof num !== 'undefined';
  return (
    <View
      wrap={false}
      {...props}
      style={{ display: 'flex', flexDirection: 'row', columnGap: 10, paddingRight: 30, ...props.style }}
    >
      {!undecorated &&
        (isNumbered ? (
          <Text style={{ fontSize: 18, minWidth: 15 }}>{num}.</Text>
        ) : (
          <Text style={{ fontSize: 18, minWidth: 15 }}>•</Text>
        ))}
      <BuilderChildren>{children}</BuilderChildren>
    </View>
  );
};
