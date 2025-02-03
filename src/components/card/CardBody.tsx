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

export const CardBody = ({
  theme = Themes.default.create(),
  children,
  withHeader,
  withFooter,
  ...props
}: CardBodyProps) => {
  const themeProps = theme.cardBodyProps;
  const style: Style = {};
  if (withHeader) {
    style.borderTopLeftRadius = 0;
    style.borderTopRightRadius = 0;
  }
  if (withFooter) {
    style.borderBottomLeftRadius = 0;
    style.borderBottomRightRadius = 0;
  }
  return (
    <Box {...themeProps} {...props} style={{ ...themeProps?.style, ...style, ...props.style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Box>
  );
};
