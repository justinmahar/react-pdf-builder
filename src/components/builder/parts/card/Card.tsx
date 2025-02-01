import React from 'react';
import { Style } from '../../../Style';
import { PDFSafeChildren } from '../PDFSafeChildren';
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
    <Box wrap={false} {...props} style={{ ...style, ...props.style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Box>
  );
};
