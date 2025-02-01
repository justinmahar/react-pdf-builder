import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../../../Style';
import { PDFSafeChildren } from '../PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Heading5 } from '../typography/Heading5';

export interface CardHeaderProps extends BoxProps {
  as?: any;
  children?: any;
  noBody?: boolean;
}

export const CardHeader = ({ children, noBody, as, ...props }: CardHeaderProps) => {
  const AsComponent = as ?? Heading5;
  let child = children;
  if (typeof child === 'string') {
    child = <AsComponent style={{ marginBottom: 0 }}>{child}</AsComponent>;
  }

  const style: Style = {
    backgroundColor: '#EEEEEE',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: noBody ? 10 : 0,
    borderBottomRightRadius: noBody ? 10 : 0,
    border: 1,
    borderColor: '#CCCCCC',
    overflow: 'hidden',
  };
  return (
    <Box {...props} style={{ ...style, ...props.style }}>
      <PDFSafeChildren>{child}</PDFSafeChildren>
    </Box>
  );
};
