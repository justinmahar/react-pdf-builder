import { Text } from '@react-pdf/renderer';
import React from 'react';
import { HeadingProps, headingStartSize, headingStepSize } from './Heading';

export interface Heading1Props extends HeadingProps {
  children?: any;
  rule?: boolean;
}

export const Heading1 = ({ children, rule, ...props }: Heading1Props) => {
  const fontSize = headingStartSize + headingStepSize * 5;
  return (
    <Text
      {...props}
      style={{
        fontSize,
        marginBottom: 10,
        borderBottom: rule ? 4 : undefined,
        ...props.style,
      }}
    >
      {children}
    </Text>
  );
};
