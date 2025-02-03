import { Text } from '@react-pdf/renderer';
import React from 'react';
import { Themes } from '../theme/themes/Themes';
import { HeadingProps } from './Heading';
import { Style } from '../Style';

export const Heading2 = ({ theme = Themes.default.create(), children, rule, ...props }: HeadingProps) => {
  const themeProps = theme?.heading2Props;
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
