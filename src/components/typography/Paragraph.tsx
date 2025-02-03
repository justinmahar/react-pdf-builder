import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface ParagraphProps extends TextProps {
  children?: any;
  theme?: Theme;
}

export const Paragraph = ({ theme = Themes.default.create(), children, ...props }: ParagraphProps) => {
  const themeProps = theme?.paragraphProps;
  return (
    <Text {...themeProps} {...props} style={{ ...themeProps?.style, ...props.style }}>
      {children}
    </Text>
  );
};
