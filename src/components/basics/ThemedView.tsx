import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { ThemedChildren } from '../children/ThemedChildren';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedViewProps extends ViewProps {
  children?: any;
  className?: string;
}

export const ThemedView = ({ children, className, style, ...props }: ThemedViewProps) => {
  const theme = usePDFThemeContext();
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return (
    <View {...props} style={{ ...classNameStyles, ...style }}>
      <ThemedChildren>{children}</ThemedChildren>
    </View>
  );
};

export const Div = ThemedView;
export type DivProps = ThemedViewProps;
