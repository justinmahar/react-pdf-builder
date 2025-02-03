import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Heading5 } from '../typography/Heading5';
import { Style } from '../Style';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface CardHeaderProps extends BoxProps {
  as?: any;
  children?: any;
  noBody?: boolean;
  theme?: Theme;
}

export const CardHeader = ({ theme = Themes.default.create(), children, noBody, as, ...props }: CardHeaderProps) => {
  const AsComponent = as ?? Heading5;
  let child = children;
  if (typeof child === 'string') {
    child = (
      <AsComponent theme={theme} style={{ marginBottom: 0 }}>
        {child}
      </AsComponent>
    );
  }

  const themeProps = theme?.cardHeaderProps;

  const style: Style = {};
  if (!noBody) {
    style.borderBottomLeftRadius = 0;
    style.borderBottomRightRadius = 0;
  }

  return (
    <Box {...themeProps} {...props} style={{ ...themeProps?.style, ...style, ...props.style }}>
      <PDFSafeChildren>{child}</PDFSafeChildren>
    </Box>
  );
};
