import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { headingStartSize, headingStepSize } from './Heading6';

export interface Heading3Props extends TextProps {
  children: any;
}

export const Heading3 = ({ children, ...props }: Heading3Props) => {
  const fontSize = headingStartSize + headingStepSize * 3;
  return (
    <Text {...props} style={{ fontSize, marginBottom: 10, ...props.style }}>
      {children}
    </Text>
  );
};
