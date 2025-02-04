import React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Style } from '../Style';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface CardBodyProps extends BoxProps {
  children?: any;
  withHeader?: boolean;
  withFooter?: boolean;
  theme?: Theme;
}

export const CardBody = ({ children, theme = Themes.default.create(), ...props }: CardBodyProps) => {
  const mergedProps = {
    ...theme.cardBodyProps,
    ...props,
  };
  const styleOverride: Style = {};
  if (mergedProps.withHeader) {
    styleOverride.borderTopLeftRadius = 0;
    styleOverride.borderTopRightRadius = 0;
  }
  if (mergedProps.withFooter) {
    styleOverride.borderBottomLeftRadius = 0;
    styleOverride.borderBottomRightRadius = 0;
  }
  return (
    <Box {...mergedProps} style={{ ...mergedProps?.style, ...styleOverride, ...props.style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Box>
  );
};
