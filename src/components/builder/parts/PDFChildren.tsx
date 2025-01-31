import { Text } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../../Style';

export interface PDFChildrenProps {
  children: any;
  textStyle?: Style;
}

export const PDFChildren = ({ children, textStyle, ...props }: PDFChildrenProps) => {
  const childArray: any[] = Array.isArray(children) ? children : [children];
  return childArray.map((c, i) => {
    if (typeof c === 'string') {
      return (
        <Text key={`child-${i}`} style={textStyle}>
          {c}
        </Text>
      );
    }
    return c;
  });
};
