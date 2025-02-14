import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';
import { Div } from '../basics/ThemedView';
import { ThemedChildren } from '../children/ThemedChildren';
import { Style } from '../Style';

export interface BoxProps extends ViewProps {
  children?: any;
  className?: string;
  dir?: 'row' | 'x' | 'column' | 'y';
  grow?: boolean;
  shrink?: boolean;
  gap?: number;
  padding?: number;
  theme?: Theme;
}

export const Box = ({ children, theme, dir, grow, shrink, gap, padding, className, style, ...props }: BoxProps) => {
  theme = theme ?? Themes.default.build();
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
    <Div theme={theme} {...props} style={{ ...styleInnate, ...classNameStyles, ...style }}>
      <ThemedChildren theme={theme}>{children}</ThemedChildren>
    </Div>
  );
};
