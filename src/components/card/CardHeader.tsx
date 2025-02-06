import React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { Style } from '../Style';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { Heading5 } from '../typography/Heading5';

export interface CardHeaderProps extends BoxProps {
  children?: any;
  as?: any;
  noBody?: boolean;
  theme?: Theme;
}

export const CardHeader = ({ children, theme = Themes.default.build(), style, ...props }: CardHeaderProps) => {
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

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  const styleOverride: Style = {};
  if (!mergedProps.noBody) {
    styleOverride.borderBottomLeftRadius = 0;
    styleOverride.borderBottomRightRadius = 0;
  }

  return (
    <Box wrap={false} {...mergedProps} style={{ ...styleInnate, ...mergedProps?.style, ...styleOverride, ...style }}>
      {child}
    </Box>
  );
};
