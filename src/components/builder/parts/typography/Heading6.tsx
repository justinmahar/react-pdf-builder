import { Text } from '@react-pdf/renderer';
import React from 'react';
import { HeadingProps, headingStartSize, headingStepSize } from './Heading';

export interface Heading6Props extends HeadingProps {
  children?: any;
}

export const Heading6 = ({ children, rule, ...props }: Heading6Props) => {
  const fontSize = headingStartSize + headingStepSize * 0;
  return (
    <Text {...props} style={{ fontSize, marginBottom: 10, borderBottom: rule ? 2 : undefined, ...props.style }}>
      {children}
    </Text>
  );
};
