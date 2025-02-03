import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface CardProps extends BoxProps {
  children?: any;
  theme?: Theme;
}

export const Card = ({ theme = Themes.default.create(), children, ...props }: CardProps) => {
  const themeProps = theme.cardProps;
  return (
    <Box {...themeProps} {...props} style={{ ...themeProps?.style, ...props.style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Box>
  );
};
