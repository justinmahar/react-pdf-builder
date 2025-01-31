import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { headingStartSize, headingStepSize } from './Heading6';

export interface Heading2Props extends TextProps {
  children: any;
}

export const Heading2 = ({ children, ...props }: Heading2Props) => {
  const fontSize = headingStartSize + headingStepSize * 4;
  return (
    <Text {...props} style={{ fontSize, marginBottom: 10, ...props.style }}>
      {children}
    </Text>
  );
};
