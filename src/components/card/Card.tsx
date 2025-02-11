import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { Style } from '../Style';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';

export interface CardProps extends BoxProps {
  children?: any;
  className?: string;
  swatch?: SwatchColor;
  swatchOpacity?: number;
  theme?: Theme;
}

export const Card = ({ children, theme = Themes.default.build(), className, style, ...props }: CardProps) => {
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
    const name = c.type?.displayName || c.type?.name || 'Unknown';
    const isHeader = name === 'CardHeader';
    const isBody = name === 'CardBody';
    const additionalProps: Record<string, any> = {};
    if (isHeader) {
      if (i === 0 && arr.length === 1) {
        additionalProps.noBody = true;
      }
      if (i > 0) {
        additionalProps.withHeader = true;
      }
      if (i === arr.length - 1) {
        additionalProps.noBody = true;
      }
    } else if (isBody) {
      if (i === 0) {
        additionalProps.noHeader = true;
      }
      if (i < arr.length - 1) {
        additionalProps.withFooter = true;
      }
    }
    return React.cloneElement(c, {
      key: `card-child-` + i,
      theme,
      swatch: mergedProps.swatch,
      swatchOpacity: mergedProps.swatchOpacity,
      ...additionalProps,
      ...c.props,
    });
  });

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Box
      {...mergedProps}
      style={{ ...styleInnate, ...themeClassNameStyles, ...themeProps?.style, ...classNameStyles, ...style }}
    >
      <PDFSafeChildren>{injectedChildArray}</PDFSafeChildren>
    </Box>
  );
};
