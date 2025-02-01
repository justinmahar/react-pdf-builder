import React from 'react';
import { Style } from '../../../Style';
import { PDFChildren } from '../PDFChildren';
import { Box, BoxProps } from '../layout/Box';

export interface CardProps extends BoxProps {
  children?: any;
}

export const Card = ({ children, ...props }: CardProps) => {
  const style: Style = {
    marginBottom: 10,
    overflow: 'hidden',
  };
  return (
    <Box {...props} style={{ ...style, ...props.style }}>
      <PDFChildren>{children}</PDFChildren>
    </Box>
  );
};
