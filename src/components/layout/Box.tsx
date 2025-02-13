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
  direction?: 'horizontal' | 'x' | 'vertical' | 'y';
  grow?: boolean;
  shrink?: boolean;
  gap?: number;
  padding?: number;
  theme?: Theme;
}

export const Box = ({
  children,
  theme,
  direction,
  grow,
  shrink,
  gap,
  padding,
  className,
  style,
  ...props
}: BoxProps) => {
  theme = theme ?? Themes.default.build();
  const styleInnate: Style = {
    display: 'flex',
    flexDirection: direction === 'horizontal' || direction === 'x' ? 'row' : 'column',
    flexGrow: grow ? 1 : undefined,
    flexShrink: shrink ? 1 : undefined,
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
