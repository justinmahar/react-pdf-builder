import { Text } from '@react-pdf/renderer';
import React from 'react';

export interface BuilderChildrenProps {
  children: any;
}

export const BuilderChildren = ({ children, ...props }: BuilderChildrenProps) => {
  const childArray: any[] = Array.isArray(children) ? children : [children];
  return childArray.map((c, i) => {
    if (typeof c === 'string') {
      return <Text key={`child-${i}`}>{c}</Text>;
    }
    return c;
  });
};
