import { Text } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../Style';
import { Themes } from '../theme/themes/Themes';
import { HeadingProps } from './Heading';

export const Heading4 = ({ theme = Themes.default.create(), children, rule, ...props }: HeadingProps) => {
  const themeProps = theme?.heading4Props;
  const style: Style = {};
  if (!rule) {
    style.borderBottom = 0;
  }
  return (
    <Text {...themeProps} {...props} style={{ ...themeProps?.style, ...style, ...props.style }}>
      {children}
    </Text>
  );
};
