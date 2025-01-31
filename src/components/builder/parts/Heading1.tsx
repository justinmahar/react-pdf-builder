import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { headingStartSize, headingStepSize } from './Heading6';

export interface Heading1Props extends TextProps {
  children: any;
}

export const Heading1 = ({ children, ...props }: Heading1Props) => {
  const fontSize = headingStartSize + headingStepSize * 5;
  return (
    <Text {...props} style={{ fontSize, marginBottom: 10, ...props.style }}>
      {children}
    </Text>
  );
};
