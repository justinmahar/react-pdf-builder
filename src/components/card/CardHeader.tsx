import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Heading5 } from '../typography/Heading5';
import { Style } from '../Style';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface CardHeaderProps extends BoxProps {
  children?: any;
  as?: any;
  noBody?: boolean;
  theme?: Theme;
}

export const CardHeader = ({ children, theme = Themes.default.create(), ...props }: CardHeaderProps) => {
  const mergedProps = {
    ...theme?.cardHeaderProps,
    ...props,
  };

  const AsComponent = mergedProps.as ?? Heading5;
  let child = children;
  if (typeof child === 'string') {
    child = (
      <AsComponent theme={theme} style={{ marginBottom: 0 }}>
        {child}
      </AsComponent>
    );
  }

  const styleOverride: Style = {};
  if (!mergedProps.noBody) {
    styleOverride.borderBottomLeftRadius = 0;
    styleOverride.borderBottomRightRadius = 0;
  }

  return (
    <Box wrap={false} {...mergedProps} style={{ ...mergedProps?.style, ...styleOverride, ...props.style }}>
      {child}
    </Box>
  );
};
