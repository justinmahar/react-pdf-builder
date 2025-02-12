import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Style } from '../Style';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { ThemeBuilder } from '../../themes/ThemeBuilder';

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
  theme = Themes.default.build(),
  direction,
  grow,
  shrink,
  gap,
  padding,
  className,
  style,
  ...props
}: BoxProps) => {
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
    <View {...props} style={{ ...styleInnate, ...classNameStyles, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
