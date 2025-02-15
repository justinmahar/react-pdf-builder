import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { getThemedChildren, ThemedChildren } from '../children/ThemedChildren';
import { Box, BoxProps } from '../layout/Box';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface CardProps extends BoxProps {
  swatch?: SwatchColor;
  swatchOpacity?: number;
}

export const Card = ({ children, className, style, ...props }: CardProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme.cardProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleInnate: Style = {
    overflow: 'hidden',
    width: '100%',
  };

  // Inject themed children with props from Card
  const themedChildren = getThemedChildren(children);
  const injectedChildArray = themedChildren.map((c, i, arr) => {
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
      dir="y"
      {...mergedProps}
      style={{ ...styleInnate, ...themeClassNameStyles, ...themeProps?.style, ...classNameStyles, ...style }}
    >
      <ThemedChildren>{injectedChildArray}</ThemedChildren>
    </Box>
  );
};
