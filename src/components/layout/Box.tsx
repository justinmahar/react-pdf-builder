import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Div, DivProps } from '../basics/Div';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface BoxProps extends DivProps {
  /** Optional. The flex direction. Use `row` or `x` for horizontal row layout. Use `column` or `y` for vertical column layout. Default is `'row'`. */
  dir?: 'row' | 'x' | 'column' | 'y';
  /** Optional. When `true`, the Box will expand within its parent Box. */
  grow?: boolean;
  /** Optional. When `true`, the Box will shrink within its parent Box. */
  shrink?: boolean;
  /** Optional. Convenient way to quickly set the `gap` style. */
  gap?: number;
  /** Optional. Convenient way to quickly set the `padding` style. */
  padding?: number;
}

/**
 * Read the [full documentation for Box](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-box--docs)
 */
export const Box = ({ children, dir, grow, shrink, gap, padding, className, style, ...props }: BoxProps) => {
  const theme = usePDFThemeContext();
  const styleInnate: Style = {
    display: 'flex',
    flexDirection: dir === 'column' || dir === 'y' ? 'column' : 'row',
    flexShrink: shrink ? 1 : undefined,
    flexGrow: grow ? 1 : undefined,
    gap,
    padding,
  };
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return (
    <Div {...props} style={{ ...styleInnate, ...classNameStyles, ...style }}>
      <ThemedChildren>{children}</ThemedChildren>
    </Div>
  );
};
