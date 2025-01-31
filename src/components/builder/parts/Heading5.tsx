import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { headingStartSize, headingStepSize } from './Heading6';

export interface Heading5Props extends TextProps {
  children: any;
}

export const Heading5 = ({ children, ...props }: Heading5Props) => {
  const fontSize = headingStartSize + headingStepSize * 1;
  return (
    <Text {...props} style={{ fontSize, marginBottom: 10, ...props.style }}>
      {children}
    </Text>
  );
};
