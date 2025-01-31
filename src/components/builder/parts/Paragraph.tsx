import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';

export interface ParagraphProps extends TextProps {
  children: any;
}

export const Paragraph = ({ children, ...props }: ParagraphProps) => {
  const fontSize = 16;
  return (
    <Text {...props} style={{ fontSize, marginBottom: 10, ...props.style }}>
      {children}
    </Text>
  );
};
