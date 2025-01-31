import React from 'react';
import { Style } from '../../../Style';
import { PDFChildren } from '../PDFChildren';
import { Box, BoxProps } from './Box';

export interface CardBodyProps extends BoxProps {
  children: any;
  withHeader?: boolean;
  withFooter?: boolean;
}

export const CardBody = ({ children, withHeader, withFooter, ...props }: CardBodyProps) => {
  const style: Style = {
    backgroundColor: '#ffffff',
    padding: 15,
    borderTopLeftRadius: withHeader ? 0 : 10,
    borderTopRightRadius: withHeader ? 0 : 10,
    borderBottomLeftRadius: withFooter ? 0 : 10,
    borderBottomRightRadius: withFooter ? 0 : 10,
    border: 1,
    borderColor: '#CCCCCC',
    overflow: 'hidden',
  };
  return (
    <Box {...props} style={{ ...style, ...props.style }}>
      <PDFChildren>{children}</PDFChildren>
    </Box>
  );
};
