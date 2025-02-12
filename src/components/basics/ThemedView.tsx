import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';

export interface ThemedViewProps extends ViewProps {
  children?: any;
  className?: string;
  theme?: Theme;
}

export const ThemedView = ({
  children,
  theme = Themes.default.build(),
  className,
  style,
  ...props
}: ThemedViewProps) => {
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return (
    <View {...props} style={{ ...classNameStyles, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
