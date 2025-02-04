import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface CardProps extends BoxProps {
  children?: any;
  theme?: Theme;
}

export const Card = ({ children, theme = Themes.default.create(), ...props }: CardProps) => {
  const mergedProps = {
    ...theme.cardProps,
    ...props,
  };
  return (
    <Box {...mergedProps} style={{ ...mergedProps?.style, ...props.style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Box>
  );
};
