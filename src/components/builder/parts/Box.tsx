import { Text, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../../Style';
import { BuilderChildren } from './BuilderChildren';

export interface BoxProps extends ViewProps {
  children: any;
  direction?: 'horizontal' | 'x' | 'vertical' | 'y';
}

export const Box = ({ children, direction, ...props }: BoxProps) => {
  const style: Style = {
    display: 'flex',
    flexDirection: direction === 'vertical' || direction === 'y' ? 'column' : 'row',
  };
  return (
    <View {...props} style={{ ...style, ...props.style }}>
      <BuilderChildren>{children}</BuilderChildren>
    </View>
  );
};
