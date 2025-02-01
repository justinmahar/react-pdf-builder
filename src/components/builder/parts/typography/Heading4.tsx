import { Text } from '@react-pdf/renderer';
import React from 'react';
import { HeadingProps, headingStartSize, headingStepSize } from './Heading';

export interface Heading4Props extends HeadingProps {
  children?: any;
}

export const Heading4 = ({ children, rule, ...props }: Heading4Props) => {
  const fontSize = headingStartSize + headingStepSize * 2;
  return (
    <Text {...props} style={{ fontSize, marginBottom: 10, borderBottom: rule ? 2 : undefined, ...props.style }}>
      {children}
    </Text>
  );
};
