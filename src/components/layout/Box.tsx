import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Div, DivProps } from '../basics/ThemedView';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface BoxProps extends DivProps {
  dir?: 'row' | 'x' | 'column' | 'y';
  grow?: boolean;
  shrink?: boolean;
  gap?: number;
  padding?: number;
}

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
