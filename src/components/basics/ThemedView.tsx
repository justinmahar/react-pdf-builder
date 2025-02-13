import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';
import { ThemedChildren } from '../children/ThemedChildren';

export interface ThemedViewProps extends ViewProps {
  children?: any;
  className?: string;
  theme?: Theme;
}

export const ThemedView = ({ children, theme, className, style, ...props }: ThemedViewProps) => {
  theme = theme ?? Themes.default.build();
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return (
    <View {...props} style={{ ...classNameStyles, ...style }}>
      <ThemedChildren theme={theme}>{children}</ThemedChildren>
    </View>
  );
};

export const Div = ThemedView;
export type DivProps = ThemedViewProps;
