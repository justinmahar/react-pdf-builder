import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { Style } from '../Style';

export interface CardProps extends BoxProps {
  children?: any;
  theme?: Theme;
}

export const Card = ({ children, theme = Themes.default.build(), style, ...props }: CardProps) => {
  const mergedProps = {
    ...theme.cardProps,
    ...props,
  };

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  return (
    <Box {...mergedProps} style={{ ...styleInnate, ...mergedProps?.style, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Box>
  );
};
