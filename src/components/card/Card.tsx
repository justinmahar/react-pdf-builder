import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { sanitizeChildren } from '../children/sanitizeChildren';
import { Box, BoxProps } from '../layout/Box';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';
import { childrenAsArray } from '../../util/util';

export interface CardProps extends BoxProps {
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  swatch?: SwatchColor;
  /** Optional. Opacity value for the swatch color, from `0` to `1`. */
  swatchOpacity?: number;
}

/**
 * Read the [full documentation for Card](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-cards-card--docs)
 */
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
  const themedChildren = sanitizeChildren(children);
  const themedChildrenArray = childrenAsArray(themedChildren).flat();
  const injectedChildArray = themedChildrenArray.map((c, i, arr) => {
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
      {sanitizeChildren(injectedChildArray)}
    </Box>
  );
};
