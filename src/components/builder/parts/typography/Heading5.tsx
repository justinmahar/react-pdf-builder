import { Text } from '@react-pdf/renderer';
import React from 'react';
import { HeadingProps, headingStartSize, headingStepSize } from './Heading';

export interface Heading5Props extends HeadingProps {
  children: any;
}

export const Heading5 = ({ children, rule, ...props }: Heading5Props) => {
  const fontSize = headingStartSize + headingStepSize * 1;
  return (
    <Text {...props} style={{ fontSize, marginBottom: 10, borderBottom: rule ? 2 : undefined, ...props.style }}>
      {children}
    </Text>
  );
};
