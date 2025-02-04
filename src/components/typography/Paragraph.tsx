import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface ParagraphProps extends TextProps {
  children?: any;
  theme?: Theme;
}

export const Paragraph = ({ children, theme = Themes.default.create(), style, ...props }: ParagraphProps) => {
  const mergedProps = {
    ...theme?.paragraphProps,
    ...props,
  };

  return (
    <Text {...mergedProps} style={{ ...mergedProps?.style, ...style }}>
      {children}
    </Text>
  );
};
