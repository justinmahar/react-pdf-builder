import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { headingStartSize, headingStepSize } from './Heading6';

export interface Heading4Props extends TextProps {
  children: any;
}

export const Heading4 = ({ children, ...props }: Heading4Props) => {
  const fontSize = headingStartSize + headingStepSize * 2;
  return (
    <Text {...props} style={{ fontSize, marginBottom: 10, ...props.style }}>
      {children}
    </Text>
  );
};
