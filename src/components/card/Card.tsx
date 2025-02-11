import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { Style } from '../Style';
import { SwatchColor } from '../theme/ColorScheme';

export interface CardProps extends BoxProps {
  children?: any;
  swatch?: SwatchColor;
  swatchOpacity?: number;
  theme?: Theme;
}

export const Card = ({ children, theme = Themes.default.build(), style, ...props }: CardProps) => {
  const themeProps = theme.cardProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  // Inject children with props from Card
  const originalChildArray = Array.isArray(children) ? children : typeof children !== 'undefined' ? [children] : [];
  const injectedChildArray = originalChildArray.map((c, i, arr) => {
    return React.cloneElement(c, {
      key: `card-child-` + i,
      theme,
      swatch: mergedProps.swatch,
      swatchOpacity: mergedProps.swatchOpacity,
      ...c.props,
    });
  });

  return (
    <Box {...mergedProps} style={{ ...styleInnate, ...themeProps?.style, ...style }}>
      <PDFSafeChildren>{injectedChildArray}</PDFSafeChildren>
    </Box>
  );
};
