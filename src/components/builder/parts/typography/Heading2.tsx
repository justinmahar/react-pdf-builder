import { Text } from '@react-pdf/renderer';
import React from 'react';
import { HeadingProps, headingStartSize, headingStepSize } from './Heading';

export interface Heading2Props extends HeadingProps {
  children?: any;
}

export const Heading2 = ({ children, rule, ...props }: Heading2Props) => {
  const fontSize = headingStartSize + headingStepSize * 4;
  return (
    <Text
      {...props}
      style={{
        fontSize,
        marginBottom: 10,
        borderBottom: rule ? 3 : undefined,
        ...props.style,
      }}
    >
      {children}
    </Text>
  );
};
