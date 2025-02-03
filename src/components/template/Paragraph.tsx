import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface TemplateProps extends TextProps {
  children?: any;
  theme?: Theme;
}

export const Template = ({ theme = Themes.default.create(), children, ...props }: TemplateProps) => {
  const themeProps = theme?.paragraphProps; // TODO: Replace with correct props
  return (
    <Text {...themeProps} {...props} style={{ ...themeProps?.style, ...props.style }}>
      {children}
    </Text>
  );
};
