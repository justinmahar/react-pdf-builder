import { Text, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../../../Style';
import { PDFChildren } from '../PDFChildren';

export interface BoxProps extends ViewProps {
  children: any;
  direction?: 'horizontal' | 'x' | 'vertical' | 'y';
  grow?: boolean;
  shrink?: boolean;
  gap?: number;
  padding?: number;
}

export const Box = ({ children, direction, grow, shrink, gap, padding, ...props }: BoxProps) => {
  const style: Style = {
    display: 'flex',
    flexDirection: direction === 'horizontal' || direction === 'x' ? 'row' : 'column',
    flexGrow: grow ? 1 : undefined,
    flexShrink: shrink ? 1 : undefined,
    gap,
    padding,
  };
  return (
    <View {...props} style={{ ...style, ...props.style }}>
      <PDFChildren>{children}</PDFChildren>
    </View>
  );
};
