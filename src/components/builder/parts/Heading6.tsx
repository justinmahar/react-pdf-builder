import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';

export const headingStartSize = 18;
export const headingStepSize = 4;

export interface Heading6Props extends TextProps {
  children: any;
}

export const Heading6 = ({ children, ...props }: Heading6Props) => {
  const fontSize = headingStartSize + headingStepSize * 0;
  return (
    <Text {...props} style={{ fontSize, marginBottom: 10, ...props.style }}>
      {children}
    </Text>
  );
};
