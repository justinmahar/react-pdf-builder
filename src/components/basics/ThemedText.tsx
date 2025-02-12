import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';

export interface ThemedTextProps extends TextProps {
  children?: any;
  className?: string;
  theme?: Theme;
}

export const ThemedText = ({ children, theme = Themes.default.build(), className, ...props }: ThemedTextProps) => {
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return (
    <Text {...props} style={{ ...classNameStyles, ...props.style }}>
      {children}
    </Text>
  );
};
