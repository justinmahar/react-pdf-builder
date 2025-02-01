import { Text } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../../Style';

export interface PDFSafeChildrenProps {
  children?: any;
  textStyle?: Style;
}

/**
 * Ensures children that are strings are wrapped in a Text component.
 */
export const PDFSafeChildren = ({ children, textStyle, ...props }: PDFSafeChildrenProps) => {
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
