import { Text } from '@react-pdf/renderer';
import React from 'react';
import { HeadingProps, headingStartSize, headingStepSize } from './Heading';

export interface Heading3Props extends HeadingProps {
  children?: any;
}

export const Heading3 = ({ children, rule, ...props }: Heading3Props) => {
  const fontSize = headingStartSize + headingStepSize * 3;
  return (
    <Text {...props} style={{ fontSize, marginBottom: 10, borderBottom: rule ? 3 : undefined, ...props.style }}>
      {children}
    </Text>
  );
};
